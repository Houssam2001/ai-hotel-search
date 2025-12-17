
import { CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const ICONS = {
    default: CheckCircle,
    fast: Zap,
    secure: Shield,
    global: Globe
};

interface Feature {
    title: string;
    description: string;
    icon?: string;
}

export default function FeatureGrid({ title, features }: { title: string, features: Feature[] }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => {
             const Icon = ICONS[f.icon as keyof typeof ICONS] || ICONS.default;
             return (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.description}</p>
                </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
