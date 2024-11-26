// app/features/page.tsx
import { CloudArrowUpIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface Feature {
  title: string;
  description: string;
  icon: typeof CloudArrowUpIcon;
}

const features: Feature[] = [
  {
    title: "Cloud Integration",
    description: "Seamlessly integrate with popular cloud services and scale your infrastructure with ease.",
    icon: CloudArrowUpIcon
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful analytics dashboard and data visualization tools.",
    icon: ChartBarIcon
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with end-to-end encryption and comprehensive threat protection.",
    icon: ShieldCheckIcon
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-navy-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-poppins mb-4">
            Powerful Features
          </h1>
          <p className="text-gray-400 text-lg font-inter max-w-2xl mx-auto">
            Everything you need to manage and scale your business effectively
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="bg-navy-800 border border-navy-700 p-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:border-blue-500/50"
              >
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}