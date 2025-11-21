"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-slate-600">
            Rated 5.0 out of 5 stars on Google
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="min-h-[200px] flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg text-slate-700 mb-6 italic">
                  "{REVIEWS[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {REVIEWS[currentIndex].author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {REVIEWS[currentIndex].date} • Google Review
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-8">
          <p className="text-slate-600">
            See all our reviews on{" "}
            
              <a href="https://www.google.com/search?q=leader+garage+door+services+dunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Google
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}