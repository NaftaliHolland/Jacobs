import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Layout from "@/components/Layout";
import Team from "@/components/Team";

const About = () => {
  return (
		<Layout>
      <div style={{backgroundImage: `url(https://www.google.com/chrome/static/images/shapes-dark.png)`}} className="bg-fixed mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Jacob's mineral water
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Discover the story behind nature's purest hydration
                </p>
              </div>
            </div>
          </div>
        </section>
       </div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<img
							alt="Pristine water source"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
							height="310"
							src="/placeholder.svg?height=310&width=550"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Founded in 2024, Joacob's Waters was born from a passion for providing the purest, most refreshing water to the community. Our journey began in the depths of the land of Ombeyi, where we discovered a source of water so pure and invigorating, we knew we had to share it with the world.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Mission</h2>
							<p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								At Pure Essence Waters, our mission is to deliver nature's purest hydration while preserving the environment. We strive to:
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Provide Pure Hydration</h3>
									<p className="text-sm text-gray-500">Deliver the cleanest, most refreshing water to our customers</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Protect the Environment</h3>
									<p className="text-sm text-gray-500">Implement sustainable practices in all aspects of our operation</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Educate Consumers</h3>
									<p className="text-sm text-gray-500">Raise awareness about the importance of water quality and conservation</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Makes Us Unique</h2>
							<p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our water isn't just refreshing – it's nature's purest form of hydration. Here's what sets Pure Essence Waters apart:
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Natural Minerals</h3>
									<p className="text-sm text-gray-500">Rich in essential minerals that support your health and well-being</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Pristine Source</h3>
									<p className="text-sm text-gray-500">Sourced from protected, untouched natural springs</p>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-4 text-center p-6">
								<div className="space-y-2">
									<h3 className="text-xl font-bold">Sustainable Packaging</h3>
									<p className="text-sm text-gray-500">Eco-friendly bottles made from recycled materials</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-xl text-gray-500 font-extrabold">
             Quality You Can Trust: Our Commitment to Excellence 
            </p>
            <p className="text-xl text-gray-500">
              At Jacob's, we are proud to be KEBS certified, ensuring that every drop of water meets the highest standards of quality and safety. This certification from the Kenya Bureau of Standards is a testament to our dedication to delivering premium bottled water that you can rely on for purity and peace of mind.
            </p>
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Team</h2>
							<p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Meet the passionate individuals behind Jacob's mineral Water
							</p>
						</div>
            <Team />
					</div>
				</div>
			</section>
	</Layout>
)}

export default About;
