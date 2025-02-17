import { Card, Image, Text, Button, Group } from '@mantine/core';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { useRef } from 'react';

const freelancers = [
  { name: "John Doe", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 },
  { name: "Alex Carter", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 },
  { name: "Sophia Lee", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 },
  { name: "Michael Johnson", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 },
  { name: "Olivia Brown", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 },
  { name: "Ava Martinez", thumbnail: "https://demoapus2.com/freelanhub/wp-content/themes/freelanhub/images/placeholder.png", rating: 0, reviews: 0, services: 0 }
];

function ExpertFreelancers() {
  const scrollRef = useRef(null);
  const cardWidth = 300;
  const cardPadding = 20;
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = cardWidth + cardPadding;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center px-20">
      <button onClick={() => scroll("left")} className="absolute left-5 p-3 bg-white rounded-full shadow-md">
        <ChevronLeft size={30} />
      </button>
      <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        {freelancers.map((freelancer, index) => (
          <div className='p-3' key={index}>
            <Card className='w-[248px] text-center transition duration-300 ease-in-out hover:scale-105' shadow="sm" padding="sm" radius="md" withBorder>
              <div className="relative flex justify-center p-5">
                <Image src={freelancer.thumbnail || "https://via.placeholder.com/80"} className="w-20 h-20 rounded-full" />
                <button className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md">
                  <Heart size={18} className="text-gray-400" />
                </button>
              </div>
              <Text fw={600}>{freelancer.name}</Text>
              <Group justify="center" mt="xs">
                <Star size={14} className="text-yellow-500" />
                <Text size="sm" fw={500}>{freelancer.rating.toFixed(1)}</Text>
                <Text size="xs" c="dimmed">({freelancer.reviews} Reviews)</Text>
              </Group>
              <Text size="sm" mt="xs" c="dimmed">{freelancer.services} Services</Text>
              <Button variant="outline" color='#2e6f40' fullWidth mt="md" radius="md">View Profile</Button>
            </Card>
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="absolute right-5 bg-white p-3 rounded-full shadow-md">
        <ChevronRight size={30} />
      </button>
    </div>
  );
}

export default ExpertFreelancers;
