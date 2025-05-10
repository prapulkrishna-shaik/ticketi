
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 5,
    title: "Classical Symphony Orchestra",
    date: "June 10, 2025",
    location: "Symphony Hall, Boston",
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800",
    category: "Music"
  },
  {
    id: 6,
    title: "Annual Art Exhibition",
    date: "June 18, 2025",
    location: "Modern Art Museum, Chicago",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800",
    category: "Art"
  },
  {
    id: 7,
    title: "Comedy Night Special",
    date: "July 5, 2025",
    location: "Laugh Factory, Los Angeles",
    imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=800",
    category: "Comedy"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Link to="/events">
            <Button variant="outline" className="border-tickety-purple text-tickety-purple hover:bg-tickety-purple/10">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`} className="block">
              <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md sm:flex-row">
                <div className="h-48 sm:h-auto sm:w-1/4">
                  <img 
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="mb-2 inline-block rounded bg-tickety-light-purple/20 px-2 py-1 text-xs font-medium text-tickety-dark-purple">
                      {event.category}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-tickety-purple">
                      {event.title}
                    </h3>
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button className="bg-tickety-purple hover:bg-tickety-dark-purple">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
