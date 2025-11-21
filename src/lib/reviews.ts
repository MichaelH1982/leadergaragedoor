export interface Review {
  id: string;
  author: string;
  rating: 5;
  date: string;
  text: string;
  source: "Google";
}

// Placeholder reviews - replace with real Google reviews later
export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "John D.",
    rating: 5,
    date: "2 weeks ago",
    text: "Outstanding service! They came out same day and fixed my broken spring in under an hour. Professional, courteous, and fairly priced. Highly recommend Leader Garage Door!",
    source: "Google"
  },
  {
    id: "2",
    author: "Sarah M.",
    rating: 5,
    date: "1 month ago",
    text: "Best garage door company in Tampa Bay! They installed a new door for us and the quality is exceptional. The team was on time, clean, and explained everything clearly.",
    source: "Google"
  },
  {
    id: "3",
    author: "Mike R.",
    rating: 5,
    date: "3 weeks ago",
    text: "Called them for an emergency repair at 9pm and they were here within 2 hours. Couldn't be happier with the service. These guys are the real deal!",
    source: "Google"
  },
  {
    id: "4",
    author: "Jennifer L.",
    rating: 5,
    date: "2 months ago",
    text: "Professional from start to finish. They replaced our garage door opener and set up smart home integration. Works perfectly! Great price too.",
    source: "Google"
  },
  {
    id: "5",
    author: "David K.",
    rating: 5,
    date: "1 month ago",
    text: "Veteran owned and operated - you can tell they take pride in their work. Fixed our garage door track alignment and it's never worked better. Thank you!",
    source: "Google"
  }
];