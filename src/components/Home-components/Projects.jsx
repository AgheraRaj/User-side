import { Card, Text, Badge, Group, Divider } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";

function Projects() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/five-jobs`);
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto p-6">
        {jobs.map((project, index) => (
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
                <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer5.jpg" alt={project.clientName} className="w-12 h-12 rounded-full object-cover" />
                <Text weight={700} size="md" color="#2e6f40" className="line-clamp-2">
                  {project.clientName}
                </Text>
              </div>

              {/* Title */}
                <Text size="lg" weight={500} className="line-clamp-2">
                  {project.title}
                </Text>
            
              {/* Description */}
              <Text size="sm" color="dimmed" className="line-clamp-3">
                {project.description
                }
              </Text>

              {/* Location and name */}
              <Text size="sm" color="gray">
                Location: {project.location}
              </Text>

              {/* Tags */}
              <Group spacing="xs" className="my-2 flex-wrap">
                {project.skillsRequired
                  .map((tag, idx) => (
                    <Badge key={idx} variant="outline" color="#2e6f40" radius="sm">
                      {tag}
                    </Badge>
                  ))}
              </Group>
            </div>

            <Divider my="md" />

            {/* Proposals and Rate */}
            <div className="flex justify-between items-center">
              <Text size="sm">Proposals: {project.proposalsCount
              }</Text>
              <Text size="sm" weight={500} className="text-[#2e6f40]">
                {project.amount
                }
              </Text>
            </div>

          </Card>
        ))}
      </div>
  );
}

export default Projects;
