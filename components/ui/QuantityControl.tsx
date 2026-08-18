"use client";

import { useState } from "react";
import { MAX_QUANTITY, clampQuantity } from "@/lib/shop";

type QuantityControlProps = {
  id: string;
  name: string;
  value: number;
  onChange: (quantity: number) => void;
  removeAtZero?: boolean;
  compact?: boolean;
};

export function QuantityControl({
  id,
  name,
  value,
  onChange,
  removeAtZero = false,
  compact = false,
}: QuantityControlProps) {
  const minimum = removeAtZero ? 0 : 1;
  const [draft, setDraft] = useState<string | null>(null);
  const displayedValue = draft ?? String(value);

  const commitDraft = () => {
    const nextValue = clampQuantity(Number(displayedValue), minimum);
    setDraft(null);
    onChange(nextValue);
  };

  const changeByStep = (quantity: number) => {
    setDraft(null);
    onChange(quantity);
  };

  return (
    <div className={`quantity-control${compact ? " quantity-control--compact" : ""}`}>
      <button
        type="button"
        onClick={() => changeByStep(Math.max(minimum, value - 1))}
        disabled={!removeAtZero && value <= 1}
        aria-label={
          removeAtZero && value === 1
            ? `Eliminar ${name} del carrito`
            : `Reducir cantidad de ${name}`
        }
      >
        −
      </button>
      <label className="sr-only" htmlFor={id}>
        Cantidad de {name}
      </label>
      <input
        id={id}
        name={`quantity-${id}`}
        type="number"
        inputMode="numeric"
        min={removeAtZero ? 0 : 1}
        max={MAX_QUANTITY}
        step="1"
        value={displayedValue}
        onChange={(event) => {
          const nextDraft = event.target.value;
          setDraft(nextDraft);
          if (nextDraft !== "") {
            onChange(clampQuantity(Number(nextDraft), minimum));
          }
        }}
        onBlur={commitDraft}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            commitDraft();
            event.currentTarget.blur();
          }
        }}
      />
      <button
        type="button"
        onClick={() => changeByStep(Math.min(MAX_QUANTITY, value + 1))}
        disabled={value >= MAX_QUANTITY}
        aria-label={`Aumentar cantidad de ${name}`}
      >
        +
      </button>
    </div>
  );
}
