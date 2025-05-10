
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <Button
        variant={activeCategory === "All" ? "default" : "outline"}
        className={activeCategory === "All" ? "bg-tickety-purple hover:bg-tickety-dark-purple" : ""}
        onClick={() => onCategoryChange("All")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={activeCategory === category ? "bg-tickety-purple hover:bg-tickety-dark-purple" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
