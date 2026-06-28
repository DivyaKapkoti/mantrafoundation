import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
  <SiteHeader />
  <div className="h-20 sm:h-24" />
  <main className="flex-1">{children}</main>
  <SiteFooter />
</div>
  );
}
