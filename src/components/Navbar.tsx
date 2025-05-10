
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Ticket className="h-6 w-6 text-tickety-purple" />
          <span className="text-xl font-bold text-tickety-dark">Tickety</span>
        </Link>
        <div className="flex gap-2">
          <Link to="/events">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-tickety-purple hover:bg-tickety-dark-purple">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
