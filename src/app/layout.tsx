import type { Metadata from "next"
import { Inter } from "next/font/google"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "María Teresa Sánchez-Seco | Abogada",
  description: "Despacho jurídico especializado en derecho civil, penal y administrativo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={\\ antialiased bg-gray-50\}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
