import React from 'react'
import { FiRefreshCw, FiHeadphones, FiCheckCircle } from 'react-icons/fi'

const OurPolicy = () => {
  const policies = [
    {
      icon: <FiRefreshCw strokeWidth={1} />,
      title: "Seamless Returns",
      description: "Complimentary exchanges and returns within 30 days of delivery."
    },
    {
      icon: <FiHeadphones strokeWidth={1} />,
      title: "Private Concierge",
      description: "Our dedicated support team is available for styling and order inquiries."
    },
    {
      icon: <FiCheckCircle strokeWidth={1} />,
      title: "Certified Quality",
      description: "Each piece is meticulously inspected to ensure lasting craftsmanship."
    }
  ]

  return (
    <div className="bg-gray-50 py-28 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center space-y-6"
            >
              {/* Icon - Minimalist Circle */}
              <div className="text-2xl text-stone-800 transition-transform duration-700 group-hover:scale-110">
                {React.cloneElement(policy.icon, { size: 32 })}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-[11px] tracking-[0.3em] uppercase font-semibold text-stone-900">
                  {policy.title}
                </h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed max-w-[240px] mx-auto">
                  {policy.description}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="w-6 h-[1px] bg-stone-300 transition-all duration-500 group-hover:w-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPolicy