import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    {
        name: "Web Development",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub5.jpg",
    },
    {
        name: "Graphic Design",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub2.jpg",
    },
    {
        name: "SEO Optimization",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub3.jpg",
    },
    {
        name: "Content Writing",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub1.jpg",
    },
    {
        name: "Digital Marketing",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub1.jpg",
    },
    {
        name: "App Development",
        image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub4.jpg",
    },
];

const PopularServices = () => {
    const scrollRef = useRef(null);

    // Scroll logic
    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = 242; // Width of each card (from min-w-[242px])
            const gap = 16; // Gap between cards (from gap-4)
            const cardsPerScroll = 5; // Number of cards to scroll

            // Calculate total scroll amount for 5 cards
            const scrollAmount = cardWidth * cardsPerScroll + gap * (cardsPerScroll - 1);

            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto pb-14">
            {/* Left Arrow Button */}
            <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="absolute left-0 top-[40%] -translate-y-1/2 z-10 p-3 bg-[#2e6f40] text-white rounded-full shadow-md hover:bg-[#29643a] transition-transform transform hover:scale-110"
                style={{ width: "48px", height: "48px" }}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scrollable Services Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="min-w-[242px] bg-white shadow-md rounded-lg flex flex-col items-center justify-center font-semibold transition p-4 hover:bg-[#68ba7f]"
                    >
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full rounded-md mb-2"
                        />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>

            {/* Right Arrow Button */}
            <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute right-0 top-[40%] -translate-y-1/2 z-10 p-3 bg-[#2e6f40] text-white rounded-full shadow-md hover:bg-[#29643a] transition-transform transform hover:scale-110"
                style={{ width: "48px", height: "48px" }}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default PopularServices;