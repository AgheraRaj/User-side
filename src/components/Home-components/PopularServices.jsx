import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    { name: "Web Development", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub5.jpg" },
    { name: "Graphic Design", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub2.jpg" },
    { name: "SEO Optimization", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub3.jpg" },
    { name: "Content Writing", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub1.jpg" },
    { name: "Digital Marketing", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub1.jpg" },
    { name: "App Development", image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/sub4.jpg" },
];

const PopularServices = () => {
    const scrollRef = useRef(null);
    const cardWidth = 260; // Card width
    const cardGap = 16; // Space between cards (gap-4 = 16px)
    const visibleCards = 5;

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = (cardWidth + cardGap) * visibleCards;
            scrollRef.current.scrollBy({ 
                left: direction === "left" ? -scrollAmount : scrollAmount, 
                behavior: "smooth" 
            });
        }
    };

    return (
        <div className="relative w-full flex items-center justify-center px-20">
            {/* Left Scroll Button */}
            <button onClick={() => scroll("left")} className="absolute left-5 bg-white p-3 rounded-full shadow-md">
                <ChevronLeft size={30} />
            </button>

            {/* Scrollable Cards Container */}
            <div 
                ref={scrollRef} 
                className="flex overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth gap-4"
                style={{ width: `${(cardWidth + cardGap) * visibleCards}px` }} 
            >
                {services.map((service, index) => (
                    <div key={index} className="min-w-[260px] flex flex-col items-center space-y-3 p-5">
                        <img src={service.image} alt={service.name} className="rounded-md w-" />
                        <p className="text-[19px] font-semibold">{service.name}</p>
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            <button onClick={() => scroll("right")} className="absolute right-5 bg-white p-3 rounded-full shadow-md">
                <ChevronRight size={30} />
            </button>
        </div>
    );
};

export default PopularServices;
