import { useState, useEffect } from "react";

const HomeCarousel = () => {
	const slides = [
		{
			url: "https://media.istockphoto.com/id/866929570/photo/closeup-on-mineral-water-bottles-in-raw-and-lines.jpg?s=612x612&w=0&k=20&c=EOFuWy7oAOzmyWFWcCxoGQjdYfJyvSNpeO_BHr8kSME=",
			description: "Mountain view with a clear blue lake",
		},
{
      url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdhdGVyfGVufDB8fHx8MTYyMjY5MzY1Nw&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Close-up of water droplets on a leaf",
    },
    {
      url: "https://media.istockphoto.com/id/1096008526/photo/many-packaged-blue-mineral-water-bottles.jpg?s=2048x2048&w=is&k=20&c=yT4If2GVBbM0Jmk9f7IgfBP6pZX-gwuCw0aBrB_pqAI=",
      description: "Crystal-clear ocean water and waves",
    },
    {
      url: "https://media.istockphoto.com/id/2163698128/photo/blue-five-liter-plastic-water-bottles-packed-at-the-warehouse-of-finished-products.jpg?s=2048x2048&w=is&k=20&c=C9G_iZ8DfB4WEwf04lU4S7R_6O2lBhc5f1-F3b6t6YU=",
      description: "Refreshing waterfall in a forest",
    },
    {
      url: "https://media.istockphoto.com/id/494501198/photo/buying-bottle-of-water.jpg?s=2048x2048&w=is&k=20&c=IME26VNEqJwggkMjHo5IPp6eqvvTBJgA2nT4BeVZHfI=",
      description: "Bottled water with condensation",
    },
	];

	
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect (() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) => (
        prevIndex === slides.length - 1? 0 : prevIndex + 1)
      );
    }, 3000)
    return () => clearInterval(autoplay)
  }, [currentIndex]);

  return (
    <section className="w-full mt-16">
      <div className="max-w-[1800px] h-[450px] w-full m-auto">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"></div>
      </div>
    </section>
  )
}

export default HomeCarousel;
