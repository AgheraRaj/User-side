import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    name: "Albert Flores",
    role: "Data Architect",
    rating: 4,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sarah Johnson",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Michael Brown",
    role: "Product Manager",
    rating: 4,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <h2 className="text-3xl font-semibold">Customer Reviews</h2>
      <Swiper
        spaceBetween={30} 
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-20">
            <blockquote className="text-2xl italic text-gray-700">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-4 flex justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < testimonial.rating ? "text-[#2e6f40]" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
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
