import { Button, Card, Menu, Text, Group, Divider, Badge } from "@mantine/core";
import axios from "axios";
import { ArrowDownWideNarrow, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobResults = () => {
  const [selected, setSelected] = useState("Sort by (Default)");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, [])

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
                <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer6.jpg" alt={project.clientName} className="w-12 h-12 rounded-full object-cover" />
                <Text weight={700} size="md" color="#2e6f40" className="line-clamp-2">
                  {project.clientName}
                </Text>
              </div>

              {/* Title */}
              <Link to="/project-detail">
                <Text size="lg" weight={500} className="line-clamp-2">
                  {project.title}
                </Text>
              </Link>

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

            {/* Apply Now Button */}
            <Button variant="filled" color="#2e6f40" fullWidth radius="md" className="mt-4">
              Apply Now
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobResults;
