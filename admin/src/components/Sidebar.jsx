import React from 'react'
import { NavLink } from 'react-router-dom'
import { CirclePlus, List, ShoppingCart, Home } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-50 border-r border-gray-200 w-64 p-4 flex flex-col">
      
      
      <nav className="space-y-2">
        <NavItem to="/add" icon={<CirclePlus className="w-5 h-5" />} label="Add Items" />
        <NavItem to="/list" icon={<List className="w-5 h-5" />} label="List Items" />
        <NavItem to="/orders" icon={<ShoppingCart className="w-5 h-5" />} label="Orders" />
      </nav>
    </div>
  )
}

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}

export default Sidebar