
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  category: string;
  price: string;
}

const EventCard = ({ id, title, date, location, imageUrl, category, price }: EventCardProps) => {
  return (
    <Card className="event-card overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
        <Badge className="absolute right-2 top-2 bg-tickety-purple hover:bg-tickety-dark-purple">
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="line-clamp-2 text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2 pb-0">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-lg font-bold text-tickety-purple">{price}</p>
      </CardContent>
      <CardFooter className="pt-4">
        <Link to={`/events/${id}`} className="w-full">
          <Button className="w-full bg-tickety-purple hover:bg-tickety-dark-purple">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
