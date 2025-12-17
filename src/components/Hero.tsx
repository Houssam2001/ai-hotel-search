
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  ctaText?: string;
}

export default function Hero({ title, subtitle, image, ctaText = "Get Started" }: HeroProps) {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" style={{ WebkitBackgroundClip: 'text' }}>
            {title}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {ctaText}
          </Link>
          <Link href="/demo" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-sm">
            Live Demo
          </Link>
        </div>
        
        {image && (
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
             {/* Using standard img for simplicity in automation, usually Next Image is better but needs config for external domains */}
             <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
