import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PokeApp - Actividad 5",
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
          {children}
        </main>

        <footer className="footer">
          <p>Actividad 5 - Sistemas Distribuidos. Footer con texto de relleno.</p>
        </footer>
      </body>
    </html>
  );
}