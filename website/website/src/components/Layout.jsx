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
      <header className="px-8 lg:px-24 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Droplets className="h-6 w-6" />
          <span className="text-xl font-bold">{ companyName }</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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
            <h3 className="font-semibold">Aqua Vitae</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@aquavitae.com</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Spring Water
            </Link>
            <Link href="#" prefetch={false}>
              Sparkling Water
            </Link>
            <Link href="#" prefetch={false}>
              Flavored Water
            </Link>
            <Link href="#" prefetch={false}>
              Mineral Water
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Our Story
            </Link>
            <Link href="#" prefetch={false}>
              Our Process
            </Link>
            <Link href="#" prefetch={false}>
              Sustainability
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Testimonials</h3>
            <Link href="#" prefetch={false}>
              Customer Reviews
            </Link>
            <Link href="#" prefetch={false}>
              Media Coverage
            </Link>
            <Link href="#" prefetch={false}>
              Awards
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Wholesale
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout;
