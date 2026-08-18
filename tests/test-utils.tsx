import { render as rtlRender, type RenderOptions } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "@/i18n/I18nContext";

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </I18nProvider>
  );
}

function render(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  return rtlRender(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";
export { render };
