// app/pricing/page.tsx
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-navy-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-poppins mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg font-inter">
            Choose the plan that best fits your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="bg-navy-800 border border-navy-700 p-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white font-poppins mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-white mb-2">
                  ${plan.price}
                  <span className="text-lg text-gray-400 font-normal">/mo</span>
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300 font-inter">
                    <svg 
                      className="w-5 h-5 text-blue-500 mr-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-navy-800">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: 29,
    features: [
      "Basic Features",
      "5 Projects",
      "Up to 10 Users",
      "2GB Storage",
      "Basic Support"
    ]
  },
  {
    name: "Professional",
    price: 99,
    features: [
      "Advanced Features",
      "Unlimited Projects",
      "Up to 100 Users",
      "50GB Storage",
      "Priority Support",
      "API Access"
    ]
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Custom Features",
      "Unlimited Everything",
      "Unlimited Users",
      "500GB Storage",
      "24/7 Support",
      "API Access",
      "Custom Integrations"
    ]
  }
];