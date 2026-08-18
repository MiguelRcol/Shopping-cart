"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import {
  MAX_QUANTITY,
  clampQuantity,
  type CartLine,
  type Product,
} from "@/lib/shop";

export const CART_STORAGE_KEY = "stride:cart:v1";

type CartState = { lines: CartLine[]; hydrated?: boolean };

type CartAction =
  | { type: "restore"; lines: CartLine[] }
  | { type: "add"; product: Product; quantity: number }
  | { type: "set"; productId: string; quantity: number }
  | { type: "remove"; productId: string }
  | { type: "clear" };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "restore":
      return { lines: action.lines, hydrated: true };
    case "add": {
      const existing = state.lines.find(
        (line) => line.product.id === action.product.id,
      );
      if (!existing) {
        return {
          ...state,
          lines: [
            ...state.lines,
            {
              product: action.product,
              quantity: clampQuantity(action.quantity),
            },
          ],
        };
      }
      return {
        ...state,
        lines: state.lines.map((line) =>
          line.product.id === action.product.id
            ? {
                ...line,
                quantity: Math.min(
                  MAX_QUANTITY,
                  line.quantity + clampQuantity(action.quantity),
                ),
              }
            : line,
        ),
      };
    }
    case "set":
      if (action.quantity <= 0) {
        return {
          ...state,
          lines: state.lines.filter(
            (line) => line.product.id !== action.productId,
          ),
        };
      }
      return {
        ...state,
        lines: state.lines.map((line) =>
          line.product.id === action.productId
            ? { ...line, quantity: clampQuantity(action.quantity) }
            : line,
        ),
      };
    case "remove":
      return {
        ...state,
        lines: state.lines.filter(
          (line) => line.product.id !== action.productId,
        ),
      };
    case "clear":
      return { ...state, lines: [] };
  }
}

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== "object") return false;
  const product = value as Partial<Product>;
  return (
    typeof product.id === "string" &&
    typeof product.title === "string" &&
    typeof product.priceCents === "number" &&
    Number.isFinite(product.priceCents) &&
    typeof product.image === "string" &&
    typeof product.alt === "string" &&
    (product.category === "Calzado" || product.category === "Accesorios") &&
    typeof product.collection === "string"
  );
}

export function parseStoredCart(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (line): line is CartLine =>
          Boolean(line) &&
          typeof line === "object" &&
          isProduct((line as Partial<CartLine>).product) &&
          typeof (line as Partial<CartLine>).quantity === "number",
      )
      .map((line) => ({
        product: line.product,
        quantity: clampQuantity(line.quantity),
      }));
  } catch {
    return [];
  }
}

type CartContextValue = {
  lines: CartLine[];
  totalQuantity: number;
  subtotalCents: number;
  hydrated: boolean;
  statusMessage: string;
  addItem: (product: Product, quantity: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [] });
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    dispatch({
      type: "restore",
      lines: parseStoredCart(window.localStorage.getItem(CART_STORAGE_KEY)),
    });
    const syncCart = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY) {
        dispatch({ type: "restore", lines: parseStoredCart(event.newValue) });
      }
    };
    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, []);

  useEffect(() => {
    if (state.hydrated) {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(state.lines),
      );
    }
  }, [state.hydrated, state.lines]);

  const addItem = useCallback((product: Product, quantity: number) => {
    const safeQuantity = clampQuantity(quantity);
    dispatch({ type: "add", product, quantity: safeQuantity });
    setStatusMessage(
      `${safeQuantity} ${safeQuantity === 1 ? "unidad añadida" : "unidades añadidas"} de ${product.title}`,
    );
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "set", productId, quantity });
    setStatusMessage("Cantidad actualizada");
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "remove", productId });
    setStatusMessage("Producto eliminado del carrito");
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "clear" });
    setStatusMessage("Carrito vaciado");
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const totalQuantity = state.lines.reduce(
      (total, line) => total + line.quantity,
      0,
    );
    const subtotalCents = state.lines.reduce(
      (total, line) => total + line.product.priceCents * line.quantity,
      0,
    );
    return {
      lines: state.lines,
      totalQuantity,
      subtotalCents,
      hydrated: Boolean(state.hydrated),
      statusMessage,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    };
  }, [
    addItem,
    clearCart,
    removeItem,
    setQuantity,
    state.lines,
    state.hydrated,
    statusMessage,
  ]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {statusMessage}
      </p>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}
