import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/site/Header" // Ajusta si tu Header está en otra carpeta
import Footer from "@/components/site/Footer" // Ajusta si tu Footer está en otra carpeta
import "./globals.css"

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
      <body className={`${inter.className} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}