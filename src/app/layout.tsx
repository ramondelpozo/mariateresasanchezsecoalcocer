import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles.css" // 👈 AQUÍ: Apuntando a tu archivo real en src/styles.css

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
        {children}
      </body>
    </html>
  )
}