import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Providers from "./providers"; 
export const metadata: Metadata = {
  title: "PokeApp - Actividad 6",
  description: "Listado y detalle de Pokémon con App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header className="navbar">
          <nav>
            <Link href="/">
              <h1>PokeApp</h1>
            </Link>
          </nav>
        </header>

        <main className="container">
          <Providers>{children}</Providers>
        </main>

        <footer className="footer">
          <p>Actividad 6 - Sistemas Distribuidos. Footer con texto de relleno.</p>
        </footer>
      </body>
    </html>
  );
}