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
import Layout from "@/components/Layout";
import {
  Filter,
  Droplets,
  Milk,
} from "lucide-react";

export default function Component() {
	const companyName = "Jacob's";
  return (
    <Layout>
				<HomeCarousel />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Products</div>
                <h2 className="text-3xl font-semi-bold tracking-tighter sm:text-5xl">Discover the Purity of </h2>
                <span className="text-3xl font-bold tracking-tighter sm:text-5xl">{companyName}</span>
                <span className="text-3xl font-semi-bold tracking-tighter sm:text-5xl"> purified drinking water</span>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    { `${companyName} offers a wide range of premium mineral water products, each crafted with the utmost care and attention to detail. ` }
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <img
                      src={ Bottle1 }
                      width="150"
                      height="150"
                      alt="Aqua Vitae Spring Water"
                      className="mx-auto h-[150px] w-[150px] object-contain"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <h3 className="mt-4 text-lg font-bold">5 Liters</h3>
                    <p className="text-muted-foreground">
										  Kshs 50
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <img
                      src={ Bottle2 }
                      width="150"
                      height="150"
                      alt="Aqua Vitae Sparkling Water"
                      className="mx-auto h-[150px] w-[150px] object-contain"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <h3 className="mt-4 text-lg font-bold">500 ml</h3>
                    <p className="text-muted-foreground">
										  Kshs 20
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <img
                      src={ Bottle3 }
                      width="150"
                      height="150"
                      alt="Aqua Vitae Flavored Water"
                      className="mx-auto h-[150px] w-[150px] object-contain"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <h3 className="mt-4 text-lg font-bold">18 Liters</h3>
                    <p className="text-muted-foreground">
										  Kshs 100
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <img
                      src={ Bottle4 }
                      width="150"
                      height="150"
                      alt="Aqua Vitae Mineral Water"
                      className="mx-auto h-[150px] w-[150px] object-contain"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <h3 className="mt-4 text-lg font-bold">18 Liters</h3>
                    <p className="text-muted-foreground">
										  Kshs 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200">
          <div className="container px-4 md:px-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Purified to Perfection</h2>
                <p className="max-w-[600px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Aqua Vitae, we use a state-of-the-art purification process to ensure that our water is free from
                  impurities and contaminants, delivering the purest and most refreshing drinking experience.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <Filter className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-primary">Filtration</h3>
                  <p className="text-primary">
                    Our water undergoes a multi-stage filtration process to remove impurities and contaminants.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <Droplets className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-primary">Purification</h3>
                  <p className="text-primary">
                    We use advanced purification techniques to ensure the highest level of water purity.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <Milk className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-bold text-primary">Bottling</h3>
                  <p className="text-primary">
                    Our water is carefully bottled in a sterile environment to maintain its purity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with Jacob's mineral water.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border p-4">
                <blockquote className="space-y-2">
                  <p className="text-muted-foreground">
                    "Jacob's water is the best mineral water I've ever tasted. The purity and refreshing taste are
                    unmatched."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="rounded-lg border p-4">
                <blockquote className="space-y-2">
                  <p className="text-muted-foreground">
                    "I've been drinking Jacob's water for years and it's the only water I trust. The consistent quality is unbeatable."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">Jane Appleseed</h4>
                      <p className="text-sm text-muted-foreground">Loyal Customer</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

