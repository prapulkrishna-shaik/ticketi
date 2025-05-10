
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for events
const allEvents = [
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
  },
  {
    id: 5,
    title: "Classical Symphony Orchestra",
    date: "June 10, 2025",
    location: "Symphony Hall, Boston",
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800",
    category: "Music",
    price: "$85.00"
  },
  {
    id: 6,
    title: "Annual Art Exhibition",
    date: "June 18, 2025",
    location: "Modern Art Museum, Chicago",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800",
    category: "Art",
    price: "$25.00"
  },
  {
    id: 7,
    title: "Comedy Night Special",
    date: "July 5, 2025",
    location: "Laugh Factory, Los Angeles",
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=800",
    category: "Comedy",
    price: "$40.00"
  },
  {
    id: 8,
    title: "Basketball Championship Finals",
    date: "August 15, 2025",
    location: "Sports Arena, Chicago",
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800",
    category: "Sports",
    price: "$150.00"
  }
];

const categories = ["Music", "Food", "Tech", "Theater", "Art", "Comedy", "Sports"];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const filteredEvents = allEvents
    .filter(event => 
      (activeCategory === "All" || event.category === activeCategory) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       event.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "price") {
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      }
      return 0;
    });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-tickety-soft-blue/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-4xl font-bold">Find Events</h1>
            
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Input
                type="search"
                placeholder="Search events or locations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              
              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by Date</SelectItem>
                  <SelectItem value="price">Sort by Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="mt-10 text-center">
                <p className="text-xl text-gray-500">No events found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
