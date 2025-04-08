import { Avatar, Badge, Button, Card, Divider, Loader, Text } from "@mantine/core";
import axios from "axios";
// import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BySkill = () => {
    const { skill } = useParams();
    const [talents, setTalents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchTalents = async () => {
            try {
                console.log('Fetching jobs for skill:', skill);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/bySkill/${skill}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setTalents(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching talents:', error);
                setLoading(false);
            }
        };
        fetchTalents();
    },[skill])

    if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <Loader color="#2E6F40" size="xl" />
          </div>
        );
      }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16">
                {talents.map((talent, index) => (
                    <Card
                        key={index}
                        padding="xl"
                        radius="md"
                        withBorder
                        className="hover:shadow-lg transition-shadow duration-300 hover:border-[#2E6F40]"
                    >
                        <div className="flex flex-col items-center text-center space-y-4">
                            <Avatar
                                src={talent.profileDtoForCard.imageUrl}
                                size={100}
                                className="rounded-full border-4 border-[#2E6F40]/10 hover:border-[#2E6F40]/30 transition-colors"
                            />
                            <div className="space-y-2">
                                <Text fw={600} size="lg">{talent.profileDtoForCard.fullName}</Text>
                                <Text size="sm" color="dimmed">@{talent.username}</Text>
                                <Text size="md" color="gray" className="font-medium">{talent.profileDtoForCard.fieldOfWork}</Text>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {talent.profileDtoForCard.skills && Array.isArray(talent.profileDtoForCard.skills) &&
                                    talent.profileDtoForCard.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            size="lg"
                                            color="green"
                                            variant="light"
                                            className="hover:bg-[#2E6F40]/20 transition-colors"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                            </div>

                            <Divider className="w-full my-4" />
                            <div className="h-30 flex flex-col justify-between">
                                <div className="grid grid-cols-2 w-full gap-4 text-start">
                                    <div className="space-y-1">
                                        <Text size="sm" fw={500} color="dimmed">Location</Text>
                                        <Text size="sm">{talent.profileDtoForCard.location}</Text>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <Text size="sm" fw={500} color="dimmed">Rate</Text>
                                        <Text size="sm" className="text-[#2E6F40] font-medium">
                                            {talent.profileDtoForCard.hourlyRate}
                                        </Text>
                                    </div>
                                </div>

                                <Link to={`/freelancer-profile/${talent.profileDtoForCard.id}`} className="w-full mt-4">
                                    <Button
                                        variant="filled"
                                        color="#2E6F40"
                                        size="md"
                                        fullWidth
                                        className="hover:bg-[#245332] transition-colors"
                                    >
                                        View Profile
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </Card>
                ))}
            </div>
  )
}

export default BySkill
