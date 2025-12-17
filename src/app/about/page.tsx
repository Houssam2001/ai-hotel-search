

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="AI Hotel Search" />
      <main>
        
        <section className="pt-32 pb-12 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600"></p>
        </section>

        <section className="py-16 max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Our Story: Revolutionizing Travel</h2>
            <div className="prose prose-lg text-gray-600">
                <p>Founded by a team of frustrated travelers and machine learning experts, AI Hotel Search was built to eliminate the tedious, inefficient process of booking accommodation. We are dedicated to making travel planning smart, fast, and exciting again.</p>
            </div>
        </section>

      </main>
      <Footer title="AI Hotel Search" />
    </div>
  );
}
