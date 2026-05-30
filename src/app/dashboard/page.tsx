"use client";

import { useState } from "react";
import { 
  Menu, X, Users, FolderOpen, Settings, LogOut, 
  Home, Briefcase, FileText, UserCircle 
} from "lucide-react";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "casos", label: "Expedientes", icon: FolderOpen },
    { id: "clientes", label: "Clientes", icon: Users },
    { id: "documentos", label: "Documentos", icon: FileText },
    { id: "configuracion", label: "Configuración", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-slate-900 border-r border-slate-800 transition-all duration-300 ease-in-out flex flex-col fixed h-full z-30`}
      >
        {/* Logo / Toggle */}
        <div className="p-4 flex items-center justify-between border-b border-slate-800 h-16">
          {isSidebarOpen && (
            <span className="text-xl font-bold text-amber-500 font-serif">Despacho MT</span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 py-6 space-y-2 px-3 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 text-slate-400 hover:text-red-400 transition-colors w-full p-2 rounded-lg hover:bg-slate-800">
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-sm">Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        
        {/* Header */}
        <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-20">
          <h2 className="text-xl font-medium text-slate-100">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
              M
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
              <p className="text-slate-400 text-sm mb-1">Casos Activos</p>
              <p className="text-3xl font-bold text-white">12</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
              <p className="text-slate-400 text-sm mb-1">Clientes Totales</p>
              <p className="text-3xl font-bold text-white">85</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
              <p className="text-slate-400 text-sm mb-1">Pendientes</p>
              <p className="text-3xl font-bold text-amber-500">4</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
              <p className="text-slate-400 text-sm mb-1">Documentos</p>
              <p className="text-3xl font-bold text-white">230</p>
            </div>
          </div>

          {/* Main Widget */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 text-center">
            <UserCircle size={48} className="text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Bienvenida, María Teresa</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Aquí puedes gestionar los expedientes, consultar la agenda de citas y administrar la documentación del despacho de forma segura.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="px-6 py-2 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors">
                Nuevo Expediente
              </button>
              <button className="px-6 py-2 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors">
                Ver Agenda
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}