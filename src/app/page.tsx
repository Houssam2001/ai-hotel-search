

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="AI Hotel Search" />
      <main>
        
        <Hero 
            title={`Stop Scrolling. Start Traveling.`}
            subtitle={`Our AI analyzes millions of data points, noise levels, and amenity reviews to find the ideal hotel match tailored precisely to your unique travel style.`}
            ctaText={`Search Smarter Now`}
            image="https://source.unsplash.com/1200x630/?luxury%20hotel%20lobby"
        />

        <FeatureGrid 
            title="Why Choose AI Hotel Search?" 
            features={[{"title":"Hyper-Personalization","description":"Finds hotels based on nuances like noise levels, specific amenities, and recent traveler sentiment analysis.","icon":"customize"},{"title":"Real-Time Deals","description":"Alerts you the second a price drops or a perfect room becomes available, across all major booking engines.","icon":"dollar-sign"},{"title":"Smart Filtering","description":"Filter results based on 'vibe' (e.g., quiet business trip, family adventure, romantic getaway) not just stars.","icon":"filter"}]} 
        />

        <section className="py-16 max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="prose prose-lg text-gray-600">
                <p>Simply input your destination and desired experience. Our proprietary algorithms instantly filter out the noise, delivering curated, optimized results in seconds. No more endless comparison tabs.</p>
            </div>
        </section>

      </main>
      <Footer title="AI Hotel Search" />
    </div>
  );
}
