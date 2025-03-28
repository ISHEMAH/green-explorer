
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Leaf className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-green-800">404</h1>
        <p className="text-xl text-green-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
