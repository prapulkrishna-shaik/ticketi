
import EventCard from "./EventCard";

// Mock data for featured events
const featuredEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2025",
    date: "July 15, 2025",
    location: "Central Park, New York",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800",
    category: "Music",
    price: "$59.99"
  },
  {
    id: 2,
    title: "International Food & Wine Expo",
    date: "August 23, 2025",
    location: "Convention Center, Miami",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800",
    category: "Food",
    price: "$45.00"
  },
  {
    id: 3,
    title: "Tech Innovation Conference",
    date: "September 5, 2025",
    location: "Tech Hub, San Francisco",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800",
    category: "Tech",
    price: "$99.99"
  },
  {
    id: 4,
    title: "Broadway Theater Weekend",
    date: "October 12, 2025",
    location: "Theater District, New York",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800",
    category: "Theater",
    price: "$120.00"
  }
];

const FeaturedEvents = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Events</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
