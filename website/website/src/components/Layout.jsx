import { Link }from "react-router-dom"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import BottleGlass from "@/assets/images/bottle-glass.png";
import Slider from "@/assets/images/slider-2.jpg";
import Bottle1 from "@/assets/images/500ml2.jpg";
import Bottle2 from "@/assets/images/500ml1.jpg";
import Bottle3 from "@/assets/images/18L.jpg";
import Bottle4 from "@/assets/images/18L2.jpg";
import HomeCarousel from "@/components/HomeCarousel";
import {
  Filter,
  Droplets,
  Milk,
} from "lucide-react";

const Layout = ({ children }) => {
	const companyName = "Jacob's";
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed px-8 py-8 lg:px-24 h-14 flex items-center w-full bg-muted">
        <Link to="/" className="flex items-center justify-center">
          <Droplets className="h-6 w-8 mr-2" />
          <span className="text-xl font-bold">{ companyName }</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/products" className="text-sm font-medium hover:underline underline-offset-4">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        { children }
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Jacob's</h3>
            <p>P.O Box 1208-40100</p>
            <p>Kisumu</p>
            <p>Phone: (254) 0000000</p>
            <p>Email: jacobs@gmail.com</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link to="#" prefetch={false}>
              Spring Water
            </Link>
            <Link to="#" prefetch={false}>
              Sparkling Water
            </Link>
            <Link to="#" prefetch={false}>
              Flavored Water
            </Link>
            <Link to="#" prefetch={false}>
              Mineral Water
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link to="#" prefetch={false}>
              Our Story
            </Link>
            <Link to="#" prefetch={false}>
              Our Process
            </Link>
            <Link to="#" prefetch={false}>
              Sustainability
            </Link>
            <Link to="#" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Testimonials</h3>
            <Link to="#" prefetch={false}>
              Customer Reviews
            </Link>
            <Link to="#" prefetch={false}>
              Media Coverage
            </Link>
            <Link to="#" prefetch={false}>
              Awards
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link to="#" prefetch={false}>
              Support
            </Link>
            <Link to="#" prefetch={false}>
              Wholesale
            </Link>
            <Link to="#" prefetch={false}>
              Partnerships
            </Link>
            <Link to="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout;
