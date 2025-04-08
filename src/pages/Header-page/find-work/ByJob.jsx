import { Badge, Button, Card, Divider, Loader, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ByJob = () => {
    const { job } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                console.log('Fetching jobs for skill:', job);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/jobbyskill/${job}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                console.log(response.data);
                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };
        fetchJobs();
    }, [job])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader color="#2E6F40" size="xl" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-8 py-10 px-16">
            {jobs.map((job) => (
                <Card
                    key={job.id}
                    padding="xl"
                    radius="md"
                    withBorder
                    className="hover:shadow-lg transition-shadow duration-300 hover:border-[#2E6F40]"
                >
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <Text fw={600} size="lg" className="text-gray-800">{job.title}</Text>
                                <Badge color={job.status === 'ACTIVE' ? 'green' : 'gray'} variant="light">
                                    {job.status}
                                </Badge>
                            </div>
                            <Text size="sm" color="dimmed" className="line-clamp-2">{job.description}</Text>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {job.skillsRequired.map((skill, index) => (
                                <Badge
                                    key={index}
                                    size="md"
                                    color="green"
                                    variant="light"
                                    className="hover:bg-[#2E6F40]/20 transition-colors"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>

                        <Divider />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Text size="sm" fw={500} color="dimmed">Duration</Text>
                                <Text size="sm">{job.duration}</Text>
                            </div>
                            <div className="space-y-1 text-right">
                                <Text size="sm" fw={500} color="dimmed">Budget</Text>
                                <Text size="sm" className="text-[#2E6F40] font-medium">
                                    ${job.amount} ({job.payout_methods})
                                </Text>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Text size="sm" fw={500} color="dimmed">Client Info</Text>
                            <Text size="sm">Location: {job.client.location}</Text>
                            <Text size="sm">Member since: {new Date(job.client.joiningDate).toLocaleDateString()}</Text>
                        </div>

                        <Link to={`/project/${job.id}`} className="w-full mt-2">
                            <Button
                                variant="filled"
                                color="#2E6F40"
                                size="md"
                                fullWidth
                                className="hover:bg-[#245332] transition-colors"
                            >
                                View Details
                            </Button>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default ByJob;