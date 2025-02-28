import { Button, Card, Menu, Text, Group } from "@mantine/core";
import { ArrowDownWideNarrow, ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    company: "Upwork",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg", 
    title: "Senior/ Staff Nurse",
    salary: "$50 - $100 / week",
    categories: ["Business", "Developers"],
    type: "Full Time",
    location: "New York",
  },
  {
    id: 2,
    company: "NetTrue",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer6.jpg",
    title: "Executive, HR Operations",
    salary: "$220 - $250 / week",
    categories: ["Developers", "Lifestyle"],
    type: "Temporary",
    location: "New York",
  },
  {
    id: 3,
    company: "DesignBlue",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer5.jpg",
    title: "Restaurant Team Member",
    salary: "$50 - $60 / day",
    categories: ["Developers", "Lifestyle"],
    type: "Temporary",
    location: "New York",
  },
  {
    id: 4,
    company: "NetTrue",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer6.jpg",
    title: "Restaurant Team Member",
    salary: "$50 - $60 / day",
    categories: ["Developers", "Lifestyle"],
    type: "Temporary",
    location: "New York",
  },
];

const JobResults = () => {
  const [selected, setSelected] = useState("Sort by (Default)");

  return (
    <div className="pb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between px-16 mb-6">
        <p>Showing 1 &ndash; {jobs.length} of {jobs.length} results</p>
        <div className="flex items-center gap-4">
          <Button variant="filled" size="md" color="#2E6F40">
            <ArrowDownWideNarrow /> Filter
          </Button>
          <Menu>
            <Menu.Target>
              <Button size="md" variant="outline" color="#2E6F40">
                <Text className="flex items-center gap-2" size="sm" fw={500}>
                  {selected} <ChevronDown size={20} />
                </Text>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => setSelected("Location 1")}>Location 1</Menu.Item>
              <Menu.Item onClick={() => setSelected("Location 2")}>Location 2</Menu.Item>
              <Menu.Item onClick={() => setSelected("Location 3")}>Location 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="grid grid-cols-4 gap-6 px-16">
        {jobs.map((job) => (
          <Card key={job.id} padding="lg" radius="md" withBorder className="relative space-y-3">
            {/* Company Logo & Name */}
            <div className="flex items-center gap-2">
              <img src={job.logo} alt={job.company} className="w-15 h-15 rounded-full" />
              <Text fw={500} size="sm" color="#2E6F40">{job.company}</Text>
            </div>

            {/* Job Title */}
            <Text fw={400} size="lg" mt="sm">{job.title}</Text>

            {/* Salary */}
            <Text fw={500} size="sm" color="dark">
              {job.salary}
            </Text>

            {/* Job Categories */}
            <Group spacing="xs" mt="xs">
              {job.categories.map((category, index) => (
                <span key={index} className="text-sm text-gray-500 font-medium">{category}</span>
              ))}
              <Text size="sm" fw={500} color="gray">| {job.type}</Text>
            </Group>

            {/* Location */}
            <Text size="sm" fw={500} color="gray" mt="sm">{job.location}</Text>

            {/* Favorite Button */}
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full border border-gray-300">
                <Heart size={16} />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobResults;
