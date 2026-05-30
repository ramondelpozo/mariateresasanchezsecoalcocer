import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/site/Header"  // ← IMPORTANTE: Importar Header
import Footer from "@/components/site/Footer"  // ← Y Footer
import "../styles.css"  // ← Tu CSS real

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "María Teresa Sánchez-Seco | Abogada",
  description: "Despacho jurídico especializado.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-white min-h-screen flex flex-col`}>
        {/* ← ESTO ES LO QUE FALTABA: Renderizar Header */}
        <Header />
        
        <main className="flex-1 pt-16">  {/* pt-16 para que el header fijo no tape contenido */}
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}