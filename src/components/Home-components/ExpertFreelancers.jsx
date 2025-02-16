import { Card, Image, Text, Button, Group } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const freelancer = [
  { name: "John Doe", thumbnail: "https://demoapus2.com/freelanhub/wp-content/uploads/elementor/thumbs/IMG-quo3e53nhzcdoabn8mphbv1vyiwkpmi6mw3rx779t2.jpg" },
  { name: "Alex Carter", thumbnail: "https://demoapus2.com/freelanhub/wp-content/uploads/elementor/thumbs/IMG-1-quo3e45tb5b3cod0e4aurdafd517hxegargafx8nza.jpg" },
  { name: "Sophia Lee", thumbnail: "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/blog1-qn9trz0tntvb57fdqgqc7n922izox97qkqia6tz1pi.jpg" },
  { name: "Michael Johnson", thumbnail: "https://demoapus2.com/freelanhub/wp-content/uploads/elementor/thumbs/IMG-2-quo3e45tb5b3cod0e4aurdafd517hxegargafx8nza.jpg" },
  { name: "Emily Davis", thumbnail: "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/blog2-qn9trz0tntvb57fdqgqc7n922izox97qkqia6tz1pi.jpg" },
  { name: "Daniel Smith", thumbnail: "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/blog3-qn9trz0tntvb57fdqgqc7n922izox97qkqia6tz1pi.jpg" },
];

function ExpertFreelancers() {
  const scrollRef = useRef(null);
  const cardWidth = 300;
  const cardPadding = 40;
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
    <div className="relative w-full flex items-center justify-center px-20 pb-18">
      {/* Left Scroll Button */}
      <button onClick={() => scroll("left")} className="absolute left-5 p-3 bg-white rounded-full shadow-md">
        <ChevronLeft size={30} />
      </button>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden no-scrollbar scroll-smooth no-scrollbar"
      >
        {freelancer.map((item, index) => (
          <div className='p-5 transition duration-300 ease-in-out hover:scale-105' key={index}>
            <Card className='w-[300px]' shadow="sm" padding="sm" radius="md" withBorder>
              <Card.Section>
                <Image src={item.thumbnail} alt={item.name} />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{item.name}</Text>
              </Group>
              <Text size="sm" c="dimmed">
                Highly skilled and experienced freelancer ready to deliver top-notch services.
              </Text>
              <Button color="#2e6f40" fullWidth mt="md" radius="md">
                View profile
              </Button>
            </Card>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button onClick={() => scroll("right")} className="absolute right-5 bg-white p-3 rounded-full shadow-md">
        <ChevronRight size={30} />
      </button>
    </div>
  );
}

export default ExpertFreelancers;
