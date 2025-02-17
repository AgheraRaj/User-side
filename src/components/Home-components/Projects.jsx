import { Card, Text, Badge, Button, Group } from "@mantine/core";

const projectData = [
  {
    title: "Do projects visualization using structure software",
    description:
      "Projects description At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    location: "New York",
    company: "Horizons Corporation",
    tags: ["Animation", "Figma", "Mobile App"],
    proposals: 3,
    rate: "$450 Hourly rate",
  },
  {
    title: "Create unique illustrations for my project",
    description:
      "Projects description At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    location: "New York",
    company: "Quantum Dynamics",
    tags: ["Animation", "Photoshop", "Website"],
    proposals: 0,
    rate: "$180 Hourly rate",
  },
  {
    title: "Do sql queries, sql database project for my project",
    description:
      "Projects description At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    location: "New York",
    company: "Employer",
    tags: ["CSS", "Photoshop", "Website"],
    proposals: 1,
    rate: "$290 Hourly rate",
  },
  {
    title: "Build excel financial model, forecasts, budget",
    description:
      "Projects description At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    location: "New York",
    company: "Fusion Innovations",
    tags: ["CSS", "Html", "Mobile App"],
    proposals: 0,
    rate: "$250 Fixed",
  },
];

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-7xl p-6">
      {projectData.map((project, index) => (
        <Card
          key={index}
          shadow="md"
          padding="lg"
          radius="md"
          withBorder
          className="relative text-start h-[300px] overflow-hidden duration-300 ease-in-out hover:scale-105 transition-all hover:shadow-xl"
        >
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e6f40] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Title */}
          <Text weight={700} size="xl" mb={10} className="text-[#2e6f40]">
            {project.title}
          </Text>

          {/* Description */}
          <Text size="sm" color="dimmed" lineClamp={3} mb={10}>
            {project.description}
          </Text>

          {/* Location and Company */}
          <Text size="sm" color="gray" mb={10}>
            {project.location} | {project.company}
          </Text>

          {/* Tags */}
          <Group spacing="xs" mb={10}>
            {project.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="outline"
                color="#2e6f40"
                radius="sm"
                className="transition-transform duration-300 hover:scale-110"
              >
                {tag}
              </Badge>
            ))}
          </Group>

          {/* Proposals and Rate */}
          <Group position="apart" mb={10}>
            <Text size="sm">Proposals: {project.proposals}</Text>
            <Text size="sm" weight={500} className="text-[#2e6f40]">
              {project.rate}
            </Text>
          </Group>

          {/* Apply Now Button */}
          <Button
            variant="outline"
            color="#2e6f40"
            fullWidth
            radius="md"
            className="mt-auto"
          >
            Apply Now
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Projects;