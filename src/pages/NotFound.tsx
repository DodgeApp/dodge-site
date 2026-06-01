import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5">
      <div className="w-full max-w-lg space-y-4 text-center">
        <h1 className="app-page-heading">404</h1>
        <p className="text-muted-foreground">This page does not exist.</p>
        <Link
          to="/"
          className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
