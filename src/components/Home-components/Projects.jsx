import { Card, Text, Badge, Button, Group, Divider } from "@mantine/core";

const projectData = [
  {
    title: "Do projects visualization using structure software",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus...",
    location: "New York",
    name: "Horizons Corporation",
    tags: ["Animation", "Figma", "Mobile App"],
    proposals: 3,
    rate: "$450 Hourly rate",
  },
  {
    title: "Create unique illustrations for my project",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer6.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    location: "New York",
    name: "Quantum Dynamics",
    tags: ["Animation", "Photoshop", "Website"],
    proposals: 0,
    rate: "$180 Hourly rate",
  },
  {
    title: "Do SQL queries, SQL database project for my project",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer5.jpg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit...",
    location: "New York",
    name: "Employer",
    tags: ["CSS", "Photoshop", "Website"],
    proposals: 1,
    rate: "$290 Hourly rate",
  },
  {
    title: "Build Excel financial model, forecasts, budget",
    logo: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer6.jpg",
    description: "Projects description At vero eos et accusamus et iusto...",
    location: "New York",
    name: "Fusion Innovations",
    tags: ["CSS", "Html", "Mobile App"],
    proposals: 0,
    rate: "$250 Fixed",
  },
];

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto p-6">
      {projectData.map((project, index) => (
        <Card
          key={index}
          padding="lg"
          radius="md"
          withBorder
          className="relative text-start w-full min-h-[420px] flex flex-col shadow-lg"
        >
          {/* Content Wrapper */}
          <div className="flex-grow flex flex-col gap-5">
            
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <img src={project.logo} alt={project.name} className="w-12 h-12 rounded-full object-cover" />
              <Text weight={700} size="md" color="#2e6f40" className="line-clamp-2">
                {project.name}
              </Text>
            </div>

            {/* Title */}
            <Text size="lg" weight={500} className="line-clamp-2">
              {project.title}
            </Text>

            {/* Description */}
            <Text size="sm" color="dimmed" className="line-clamp-3">
              {project.description}
            </Text>

            {/* Location and name */}
            <Text size="sm" color="gray">
              Location: {project.location}
            </Text>

            {/* Tags */}
            <Group spacing="xs" className="my-2 flex-wrap">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" color="#2e6f40" radius="sm">
                  {tag}
                </Badge>
              ))}
            </Group>
          </div>

          <Divider my="md" />

          {/* Proposals and Rate */}
          <div className="flex justify-between items-center">
            <Text size="sm">Proposals: {project.proposals}</Text>
            <Text size="sm" weight={500} className="text-[#2e6f40]">
              {project.rate}
            </Text>
          </div>

          {/* Apply Now Button */}
          <Button variant="filled" color="#2e6f40" fullWidth radius="md" className="mt-4">
            Apply Now
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
