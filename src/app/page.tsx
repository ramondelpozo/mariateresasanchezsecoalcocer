import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-amber-500 font-serif">
        María Teresa Sánchez-Seco
      </h1>
      <p className="text-xl text-slate-400 mb-8">
        Despacho Jurídico - Abogada
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/dashboard" 
          className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
        >
          Ir al Dashboard
        </Link>
        <a 
          href="https://github.com/ramondelpozo/mariateresasanchezsecoalcocer" 
          target="_blank"
          className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
        >
          Ver Código
        </a>
      </div>
      
      <p className="mt-12 text-sm text-slate-600">
        Web en desarrollo - MVP v1.0
      </p>
    </div>
  )
}