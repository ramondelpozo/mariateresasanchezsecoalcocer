// src/components/site/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} María Teresa Sánchez-Seco Alcocer. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}