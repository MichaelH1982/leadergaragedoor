import Image from 'next/image';

export function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-gray-600">
            Quality workmanship you can count on
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-72 w-full">
                <Image src="/gallery/Before.jpg" alt="Garage door before repair" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-900">Before</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative h-72 w-full">
                <Image src="/gallery/After.jpg" alt="Garage door after repair" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-900">After</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}