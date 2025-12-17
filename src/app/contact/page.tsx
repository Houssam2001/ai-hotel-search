

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
            <h1 className="text-4xl font-bold mb-6">Contact Support</h1>
            <p className="text-xl text-gray-600"></p>
        </section>

        <section className="py-16 max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <div className="prose prose-lg text-gray-600">
                <p>For sales, partnerships, or immediate support, please email us directly or fill out the form below. 

contact@aihotels.com</p>
            </div>
        </section>

      </main>
      <Footer title="AI Hotel Search" />
    </div>
  );
}
