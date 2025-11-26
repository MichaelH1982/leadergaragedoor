import type { Metadata } from 'next';
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery | Our Work | Leader Garage Door Services',
  description: 'See examples of our garage door installations, repairs, and maintenance work throughout Tampa Bay. Quality craftsmanship from a veteran-owned business.',
  keywords: ['garage door photos', 'garage door installation photos', 'garage door repair examples', 'Tampa Bay garage door work'],
  openGraph: {
    title: 'Gallery | Leader Garage Door',
    description: 'See examples of our garage door work throughout Tampa Bay.',
    url: 'https://leadergaragedoor.vercel.app/gallery',
    siteName: 'Leader Garage Door Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function GalleryPage() {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <LocalBusinessSchema />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality craftsmanship on every job. See examples of our garage door installations, repairs, and maintenance.
          </p>
        </div>

        {/* Before & After Comparison */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="relative h-72 w-full">
                <Image src="/gallery/Before.jpg" alt="Garage door before repair" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-900">Before</p>
              </div>
            </div>
            <div>
              <div className="relative h-72 w-full">
                <Image src="/gallery/After.jpg" alt="Garage door after repair" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-900">After</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/gallery/Springs.JPEG" alt="Garage door spring replacement" fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-900">Spring Replacement</p>
            </div>
          </div>
        </div>

       <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to transform your garage door?</p>
          <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}