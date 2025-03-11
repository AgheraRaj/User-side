import { useEffect, useState } from 'react';
import { Avatar, Button, TextInput, Textarea, Title, Group, Badge, Accordion, Loader, Center, Container, Card, Text, Paper, ThemeIcon } from '@mantine/core';
import { Mail, Phone, MapPin, User, DollarSign, GraduationCap, FileText, Landmark, Link } from 'lucide-react';
import axios from 'axios';

const MyProfile = () => {
  // Update the initial state structure
  const [profileData, setProfileData] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    hourlyRate: '',
    imageUrl: '',
    skills: [],
    companyName: '',
    status: '',
    bank: {
      bankName: '',
      accountHolderName: '',
      accountNumber: '',
      ifscCode: '',
      branch: ''
    },
    portfolio: [],
    education: [],
    certification: [],
    articles: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/getProfile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      // Create payload with only the required fields
      const payload = {
        id: profileData.id || 0,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        description: profileData.description,
        email: profileData.email,
        phone: profileData.phone,
        imageUrl: profileData.imageUrl,
        skills: profileData.skills,
        hourlyRate: profileData.hourlyRate,
        location: profileData.location,
        companyName: profileData.companyName || ''
      };

      await axios.put(`${import.meta.env.VITE_API_URL}/profile/edit`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Loader color="teal" size="xl" />
      </Center>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Paper shadow="md" radius="lg" p={0} className="overflow-hidden">
        <div className="bg-gradient-to-l from-[#2E6F40] to-[#68BA7F] p-6">
          <Title order={1}>My Profile</Title>
          <Text className="text-white/80">Manage your personal information</Text>
        </div>

        <div className="flex flex-col md:flex-row gap-10 p-6">
          {/* Left Column - Profile Image & Status */}
          <div className="flex flex-col items-center space-y-6 w-full md:w-1/3">
            <Paper shadow="sm" radius="lg" p={6} className="w-full bg-gray-50">
              <div className="relative flex justify-center">
                <Avatar
                  size={200}
                  src={profileData.imageUrl}
                  className="rounded-full border-4 border-white shadow-xl"
                />
                <Badge
                  size="lg"
                  className="absolute bottom-2 right-20"
                  color='#2E6F40'
                >
                  {profileData.status}
                </Badge>
              </div>

              <div className="mt-6 flex flex-col items-center space-y-4 pb-4">
                <Text align="center" size="xl" fw={600}>{`${profileData.firstName} ${profileData.lastName}`}</Text>
                <Text align="center" c="dimmed" size="sm">{profileData.email}</Text>
                <Button
                  color='#2E6F40'
                  className="w-full mt-6"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>
            </Paper>

            {/* Quick Info */}
            <Paper shadow="sm" radius="lg" p={6} className="w-full">
              <Title order={4} mx="md">Quick Info</Title>
              <div className="space-y-4 p-4">
                <Group>
                  <ThemeIcon color='#2E6F40' size="lg" radius="md">
                    <MapPin size={18} />
                  </ThemeIcon>
                  <div>
                    <Text size="sm" c="dimmed">Location</Text>
                    <Text>{profileData.location}</Text>
                  </div>
                </Group>
                <Group>
                  <ThemeIcon color='#2E6F40' size="lg" radius="md">
                    <DollarSign size={18} />
                  </ThemeIcon>
                  <div>
                    <Text size="sm" c="dimmed">Hourly Rate</Text>
                    <Text>{profileData.hourlyRate}</Text>
                  </div>
                </Group>
              </div>
            </Paper>
          </div>

          {/* Right Column - Profile Details */}
          <div className="flex-1">
            <Paper shadow="sm" radius="lg" p={6} className="mb-6">
              <Title order={4} mx='md'>Basic Information</Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<User size={16} />}
                    label="First Name"
                    value={profileData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter first name"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>First Name</Text>
                    <Group gap="xs">
                      <User size={16} />
                      <Text fw={500}>{profileData.firstName}</Text>
                    </Group>
                  </div>
                )}

                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<User size={16} />}
                    label="Last Name"
                    value={profileData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter last name"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>Last Name</Text>
                    <Group gap="xs">
                      <User size={16} />
                      <Text fw={500}>{profileData.lastName}</Text>
                    </Group>
                  </div>
                )}

                {/* Apply the same pattern to other fields */}
                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<Mail size={16} />}
                    label="Email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter email"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>Email</Text>
                    <Group gap="xs">
                      <Mail size={16} />
                      <Text fw={500}>{profileData.email}</Text>
                    </Group>
                  </div>
                )}

                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<Phone size={16} />}
                    label="Phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter phone number"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>Phone</Text>
                    <Group gap="xs">
                      <Phone size={16} />
                      <Text fw={500}>{profileData.phone}</Text>
                    </Group>
                  </div>
                )}

                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<MapPin size={16} />}
                    label="Location"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Enter location"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>Location</Text>
                    <Group gap="xs">
                      <MapPin size={16} />
                      <Text fw={500}>{profileData.location}</Text>
                    </Group>
                  </div>
                )}

                {isEditing ? (
                  <TextInput
                    variant="unstyled"
                    leftSection={<DollarSign size={16} />}
                    label="Hourly Rate"
                    value={profileData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    placeholder="Enter hourly rate"
                  />
                ) : (
                  <div>
                    <Text size="sm" c="dimmed" mb={4}>Hourly Rate</Text>
                    <Group gap="xs">
                      <DollarSign size={16} />
                      <Text fw={500}>{profileData.hourlyRate}</Text>
                    </Group>
                  </div>
                )}
              </div>
            </Paper>

            <Paper shadow="sm" radius="lg" p={6} mb="md">

              <Title order={4} mx="md">Bio</Title>
              <div className='p-4'>
                {isEditing ? (
                  <Textarea
                    variant="unstyled"
                    value={profileData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Write something about yourself..."
                    minRows={4}
                  />
                ) : (
                  <Text className="prose max-w-none">{profileData.description}</Text>
                )}
              </div>
            </Paper>

            <Paper shadow="sm" radius="lg" p={6} className="mb-6">
              <Title order={4} mx="md">Skills & Expertise</Title>
              <div className="flex flex-wrap gap-2 p-4">
                {profileData.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    size="lg"
                    color='#2E6F40'
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Paper>

            <Accordion variant="separated" radius="lg">
              {/* Bank Details */}
              <Accordion.Item value="bank">
                <Accordion.Control>
                  <Group gap="xs">
                    <ThemeIcon color='#2E6F40' size="lg" radius="md">
                      <Landmark size={18} />
                    </ThemeIcon>
                    <Text fw={600}>Bank Details</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               
                        <div>
                          <Text size="sm" c="dimmed" mb={4}>Bank Name</Text>
                          <Text fw={500}>{profileData.bank.bankName}</Text>
                        </div>
                        <div>
                          <Text size="sm" c="dimmed" mb={4}>Account Holder</Text>
                          <Text fw={500}>{profileData.bank.accountHolderName}</Text>
                        </div>
                        <div>
                          <Text size="sm" c="dimmed" mb={4}>Account Number</Text>
                          <Text fw={500}>{profileData.bank.accountNumber}</Text>
                        </div>
                        <div>
                          <Text size="sm" c="dimmed" mb={4}>IFSC Code</Text>
                          <Text fw={500}>{profileData.bank.ifscCode}</Text>
                        </div>
                      
                    
                  </div>
                </Accordion.Panel>
              </Accordion.Item>

              {/* Portfolio */}
              <Accordion.Item value="portfolio">
                <Accordion.Control>
                  <Group gap="xs">
                    <ThemeIcon color='#2E6F40' size="lg" radius="md">
                      <Link size={18} />
                    </ThemeIcon>
                    <Text fw={600}>Portfolio</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.portfolio.map((item, index) => (
                      <Card key={index} withBorder>
                        <Text fw={500}>{item.portfolioTitle}</Text>
                        <img src={item.portfolioImage} alt={item.protfolioTitle} />
                        <Text size="sm" c="dimmed" mb={2}>{item.description}</Text>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.skills.map((skill, idx) => (
                            <Badge key={idx} size="sm" color='#2E6F40'>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              
              
              <Accordion.Item value="education">
                <Accordion.Control>
                  <Group gap="xs">
                    <ThemeIcon color='#2E6F40' size="lg" radius="md">
                      <GraduationCap size={18} />
                    </ThemeIcon>
                    <Text fw={600}>Education</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="space-y-4">
                    {profileData.education.map((edu, index) => (
                      <Card key={index} withBorder>
                        <Text fw={500}>{edu.course}</Text>
                        <Text size="sm" c="dimmed">{edu.institute}</Text>
                        <Text size="sm" c="dimmed">Year: {edu.year}</Text>
                      </Card>
                    ))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              
              
              <Accordion.Item value="certifications">
                <Accordion.Control>
                  <Group gap="xs">
                    <ThemeIcon color='#2E6F40' size="lg" radius="md">
                      <FileText size={18} />
                    </ThemeIcon>
                    <Text fw={600}>Certifications</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.certification.map((cert, index) => (
                      <Card key={index} withBorder>
                        <Text fw={500}>{cert.certificateName}</Text>
                        <Text size="sm" c="dimmed">Issued by: {cert.certificateIssuer}</Text>
                        <Text size="sm" c="dimmed">Date: {new Date(cert.issuedDate).toLocaleDateString()}</Text>
                      </Card>
                    ))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>

              {/* Articles */}
              <Accordion.Item value="articles">
                <Accordion.Control>
                  <Group gap="xs">
                    <ThemeIcon color='#2E6F40' size="lg" radius="md">
                      <FileText size={18} />
                    </ThemeIcon>
                    <Text fw={600}>Articles</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="prose max-w-none">
                    {profileData.articles}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            {isEditing && (
              <Group justify="flex-end" mt="xl">
                <Button
                  size="lg"
                  color='#2E6F40'
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </Group>
            )}
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default MyProfile;