
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

// Mock events data
const eventsData = [
  {
    id: 1,
    title: "Summer Music Festival 2025",
    date: "July 15, 2025",
    time: "12:00 PM - 11:00 PM",
    location: "Central Park, New York",
    address: "5th Ave, New York, NY 10022",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600",
    category: "Music",
    price: "$59.99",
    description: "Get ready for the biggest summer music festival of 2025! Featuring top artists across multiple genres, food vendors, art installations, and more. A full day of music and fun for all ages in the heart of Central Park.",
    availableSeats: 500,
    additionalImages: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800"
    ],
    organizer: "NYC Events Co."
  },
  {
    id: 2,
    title: "International Food & Wine Expo",
    date: "August 23, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Convention Center, Miami",
    address: "1901 Convention Center Dr, Miami Beach, FL 33139",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600",
    category: "Food",
    price: "$45.00",
    description: "Experience culinary delights from around the world at the International Food & Wine Expo. Sample cuisine from over 40 countries, watch cooking demonstrations from celebrity chefs, and participate in wine tastings led by master sommeliers.",
    availableSeats: 250,
    additionalImages: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800"
    ],
    organizer: "Global Taste Events"
  },
  {
    id: 3,
    title: "Tech Innovation Conference",
    date: "September 5, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Tech Hub, San Francisco",
    address: "747 Howard St, San Francisco, CA 94103",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600",
    category: "Tech",
    price: "$99.99",
    description: "Join industry leaders and innovators at the premier tech conference of the year. Featuring keynote speeches, panel discussions, product demos, networking opportunities, and insights into the future of technology.",
    availableSeats: 300,
    additionalImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800"
    ],
    organizer: "TechFuture Inc."
  }
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || "1");
  
  // Find the event based on the ID from URL params
  const event = eventsData.find(event => event.id === eventId) || eventsData[0];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-80 w-full lg:h-96">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <Badge className="mb-2 bg-tickety-purple hover:bg-tickety-dark-purple">
              {event.category}
            </Badge>
            <h1 className="text-3xl font-bold text-white md:text-4xl">{event.title}</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Event Details */}
            <div className="lg:col-span-2">
              <div className="mb-8 space-y-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-tickety-purple" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-tickety-purple" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-tickety-purple" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-tickety-purple" />
                    <span>{event.availableSeats} seats available</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold">About This Event</h2>
                <p className="text-gray-700">{event.description}</p>
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Location</h3>
                  <p className="text-gray-700">{event.address}</p>
                </div>
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Organizer</h3>
                  <p className="text-gray-700">{event.organizer}</p>
                </div>
                
                {event.additionalImages && event.additionalImages.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">Event Gallery</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {event.additionalImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${event.title} - image ${index + 1}`}
                          className="rounded-lg object-cover"
                          style={{ height: '200px', width: '100%' }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Booking Card */}
            <div>
              <div className="rounded-lg border bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Book Tickets</h3>
                <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Price per ticket</span>
                  <span className="text-2xl font-bold text-tickety-purple">{event.price}</span>
                </div>
                
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium">
                    Number of Tickets
                  </label>
                  <select className="mb-4 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-tickety-purple focus:outline-none focus:ring-1 focus:ring-tickety-purple">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'ticket' : 'tickets'}
                      </option>
                    ))}
                  </select>
                  
                  <div className="mb-4 flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>{event.price}</span>
                  </div>
                  
                  <div className="mb-4 flex items-center justify-between">
                    <span>Service Fee</span>
                    <span>$5.00</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold">
                      ${parseFloat(event.price.replace("$", "")) + 5}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-tickety-purple hover:bg-tickety-dark-purple">
                  <Ticket className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                
                <p className="mt-4 text-center text-sm text-gray-500">
                  Secure checkout. Instant confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
