import { Card, Text, Badge, Button, Group, Divider } from "@mantine/core";

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
          padding="lg"
          radius="md"
          withBorder
          className="relative text-start h-[320px] overflow-hidden shadow-xl"
        >

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
                size="md"
              >
                {tag}
              </Badge>
            ))}
          </Group>

          <div className="w-full">
            <Divider my="md" />
          </div>

          {/* Proposals and Rate */}
          <div className="flex justify-between items-center">
            <Text size="sm">Proposals: {project.proposals}</Text>
            <Text size="sm" weight={500} className="text-[#2e6f40]">
              {project.rate}
            </Text>
          </div>

          {/* Apply Now Button */}
          <Button
            variant="filled"
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