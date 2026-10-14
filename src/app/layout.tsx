import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica — Trinodo",
  description: "Demo de gestión clínica Trinodo Labs",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
