
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Tickety made it so easy to find and book concert tickets. The process was smooth and the customer service was excellent!",
    role: "Music lover"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "I've been using Tickety for all my sports events. The app is intuitive and I love the seat selection feature.",
    role: "Sports fan"
  },
  {
    id: 3,
    name: "Amelia Rodriguez",
    text: "Finding theater tickets used to be such a hassle until I discovered Tickety. Now it's my go-to for all performances!",
    role: "Theater enthusiast"
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-tickety-soft-blue/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none bg-white shadow-md">
              <CardContent className="p-6">
                <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
