import { Avatar, Badge, Button, Card, Divider, Menu, Text } from "@mantine/core"
import { ArrowDownWideNarrow, ChevronDown, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

const JobTalent = () => {

    const talents = [
        {
            name: "Agent Pakulla",
            role: "Nursing Assistant",
            rating: 4.0,
            reviews: 1,
            skills: ["Design Writing", "HTML5"],
            location: "New York",
            rate: "$60 - $65 / hr",
            image: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/12-300x300.jpg"
        },
        {
            name: "John Powell",
            role: "Product Manager",
            rating: 3.0,
            reviews: 1,
            skills: ["Animation", "Creative"],
            location: "Los Angeles",
            rate: "$55 - $60 / hr",
            image: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-300x300.jpg"
        },
        {
            name: "Thomas Powell",
            role: "Design & Creative",
            rating: 4.0,
            reviews: 1,
            skills: ["Creative", "Figma"],
            location: "Los Angeles",
            rate: "$25 - $30 / hr",
            image: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-300x300.jpg"
        },
        {
            name: "Tom Wilson",
            role: "Marketing Manager",
            rating: 4.5,
            reviews: 2,
            skills: ["Creative", "Design Writing"],
            location: "New York",
            rate: "$45 - $50 / hr",
            image: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-300x300.jpg"
        }
    ];

    const [selected, setSelected] = useState("Sort by (Default)")

    return (
        <div className="pb-10">
            {/* Header Section */}
            <div className="flex items-center justify-between px-16 mb-6">
                <p>Showing 1 &ndash; {talents.length} of {talents.length} results</p>
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

            {/* Card Section */}
            <div className="grid grid-cols-4 gap-6 px-16">
                {talents.map((talent, index) => (
                    <Card key={index} padding="lg" radius="md" withBorder>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <Avatar src={talent.image} size={90} className="rounded-full" />
                            <Text fw={400} size="lg" mt="sm">{talent.name}</Text>
                            <Text size="sm" mt={2} color="gray">{talent.role}</Text>
                            <div className="flex items-center mt-2">
                                <Star size={16} color="#FACC15" fill="#FACC15" />
                                <Text size="sm" ml={4}>{talent.rating} ({talent.reviews} Review{talent.reviews > 1 ? 's' : ''})</Text>
                            </div>
                            <div className="flex gap-2 mt-2">
                                {talent.skills.map((skill, i) => (
                                    <Badge key={i} size="xl" color="orange" variant="light">
                                        <Text size="xs">
                                            {skill}
                                        </Text>
                                    </Badge>
                                ))}
                            </div>

                            <div className="w-full px-4">
                                <Divider my="md" />
                            </div>

                            <div className="flex justify-between w-full items-center text-start px-4">
                                <div>
                                    <Text size="sm"><strong>Location:</strong></Text>
                                    <Text size="sm">{talent.location}</Text>
                                </div>
                                <div>
                                    <Text size="sm"><strong>Rate:</strong></Text>
                                    <Text size="sm">{talent.rate}</Text>
                                </div>
                            </div>
                            <Link to="/freelancer-profile" className="w-full">
                            <Button variant="filled" color="#2E6F40" size="md" fullWidth mt="md">View Profile</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default JobTalent
