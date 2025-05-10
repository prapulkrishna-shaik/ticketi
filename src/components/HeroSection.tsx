
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-tickety-purple/20 to-tickety-soft-blue/40 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-tickety-dark lg:text-5xl">
              Book Your Next <span className="text-tickety-purple">Adventure</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Find and book tickets for concerts, sports, theater, festivals and more. 
              Your perfect event experience starts here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/events">
                <Button className="bg-tickety-purple px-8 py-6 text-lg hover:bg-tickety-dark-purple">
                  Browse Events
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-tickety-purple px-8 py-6 text-lg text-tickety-purple hover:bg-tickety-purple/10">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800" 
              alt="Event tickets" 
              className="mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
