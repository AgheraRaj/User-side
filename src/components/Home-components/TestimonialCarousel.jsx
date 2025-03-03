import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    name: "Albert Flores",
    role: "Data Architect",
    rating: 4,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sarah Johnson",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Michael Brown",
    role: "Product Manager",
    rating: 4,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <div className="flex flex-col items-center justify-center space-y-4 mb-5">
        <img src="https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/h51.png" alt="" />
        <h2 className="font-semibold">Customer Reviews</h2>
      </div>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="pb-20">
            <blockquote className="text-2xl italic">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-4 flex justify-center">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-xl text-[#2e6f40]">⭐</span>
              ))}

            </div>
            <p className="mt-2 font-semibold">
              {testimonial.name}{" "}
              <span className="text-gray-500">/ {testimonial.role}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
