import { Avatar, Button } from "@mantine/core";
import axios from "axios";
import { CalendarDays, CheckCircle, CreditCard, IdCard, Loader, Mail, MapPin, Phone, Star, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const [selectedTab, setSelectedTab] = useState('details');
    const { jobId } = useParams();
    const [expanded, setExpanded] = useState({});
    const [projectDetails, setProjectDetails] = useState(null);
    const [proposal, setProposal] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const toggleDescription = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the specific freelancer's description
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                // Use jobId consistently instead of id
                const projectResponse = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${jobId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const proposalsResponse = await axios.get(`${import.meta.env.VITE_API_URL}/proposals/${jobId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                setProjectDetails(projectResponse.data);
                setProposal(proposalsResponse.data);
                console.log('Project Details:', projectResponse.data);
                console.log('Proposals Details:', proposalsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.response?.data?.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        if (jobId) {
            fetchData();
        }
    }, [jobId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader color="#2E6F40" size={50} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-gray-50 min-h-screen">
            {/* Navbar */}
            <nav className="px-4 md:px-20 shadow-sm bg-white sticky top-0 z-10">
                <ul className="flex gap-8 py-4 font-medium">
                    <li
                        onClick={() => setSelectedTab('details')}
                        className={`px-2 pb-2 cursor-pointer transition-all hover:text-[#2E6F40] ${selectedTab === 'details'
                            ? 'text-[#2E6F40] border-b-[3px] border-[#2E6F40]'
                            : 'text-gray-600'
                            }`}
                    >
                        Details
                    </li>
                    <li
                        onClick={() => setSelectedTab('proposals')}
                        className={`px-2 pb-2 cursor-pointer transition-all hover:text-[#2E6F40] ${selectedTab === 'proposals'
                            ? 'text-[#2E6F40] border-b-[3px] border-[#2E6F40]'
                            : 'text-gray-600'
                            }`}
                    >
                        Proposals
                    </li>
                </ul>
            </nav>

            {/* Content Section */}
            <div className="py-8 px-4 md:px-20 max-w-7xl mx-auto">
                {selectedTab === 'details' ? (
                    <div className="mt-5 flex flex-col lg:flex-row gap-8">
                        {/* Left Side - Project Info */}
                        <div className="lg:w-2/3 bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Project Details</h2>
                            <p className="mt-5 text-gray-600 leading-relaxed space-y-4">
                                {projectDetails?.description}
                            </p>

                            {/* Skills Section */}
                            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {projectDetails?.skillsRequired?.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#E5F3F2] font-medium text-[#2E6F40] px-4 py-2 text-sm rounded-full hover:bg-[#d0ebe9] transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Project Status */}
                            <div className="mt-8 flex items-center gap-3 bg-[#E5F3F2] p-4 rounded-lg">
                                <CheckCircle className="text-[#2E6F40]" size={24} />
                                <span className="text-[#2E6F40] font-medium">Project is currently open for proposals</span>
                            </div>
                        </div>

                        {/* Right Side - Client Details */}
                        <div className="lg:w-1/3 bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">About the Client</h3>
                            <div className="space-y-4">
                                <p className="text-gray-600 flex items-center gap-3">
                                    <MapPin size={20} className="text-gray-400" />
                                    <span>{projectDetails?.client?.location || 'Location not specified'}</span>
                                </p>
                                <p className="text-gray-600 flex items-center gap-3">
                                    <CalendarDays size={20} className="text-gray-400" />
                                    <span>{projectDetails?.client?.joiningDate || 'Join date not available'}</span>
                                </p>
                            </div>


                            {/* Verification Section */}
                            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Client Verification</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <IdCard size={20} />, text: "Identity verified" },
                                    { icon: <User size={20} />, text: "Profile verified" },
                                    { icon: <CreditCard size={20} />, text: "Payment verified" },
                                    { icon: <Mail size={20} />, text: "Email verified" },
                                    { icon: <Phone size={20} />, text: "Phone verified" }
                                ].map((item, index) => (
                                    <p key={index} className="flex items-center gap-3 text-gray-600">
                                        <span className="text-gray-400">{item.icon}</span>
                                        <span className="capitalize">{item.text}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Proposals</h2>

                                <p className="mt-2 text-gray-600">
                                    Below are the proposals submitted by freelancers:
                                </p>
                            </div>
                            <div>
                                <Button color="#2E6F40">
                                    Add Proposal
                                </Button>
                            </div>
                        </div>


                        {/* Proposals List */}
                        <div className="mt-6 space-y-6">
                            {proposal.map((freelancer) => (
                                <div key={freelancer.id}
                                    className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                                >
                                    <div className="flex gap-6">
                                        <Avatar
                                            src={freelancer.image}
                                            size={80}
                                            alt={freelancer.name}
                                            className="rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h2 className="text-xl font-bold text-gray-800">
                                                        {freelancer.name}
                                                        <span className="text-gray-400 text-base ml-2">{freelancer.username}</span>
                                                        <span className={`ml-2 px-2 py-1 text-sm rounded-full ${freelancer.status === 'HIRED' ? 'bg-green-100 text-green-600' : ''}`}>
                                                            {freelancer.status}
                                                        </span>
                                                    </h2>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <div className="flex items-center text-yellow-500">
                                                            <Star size={16} fill="currentColor" />
                                                            <span className="ml-1 font-semibold">{freelancer.rating}</span>
                                                        </div>
                                                        <span className="text-gray-400">({freelancer.reviews})</span>
                                                        <span className="text-[#2E6F40] font-medium">{freelancer.successRate}% Success</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xl font-bold text-gray-800">{freelancer.bid}</div>
                                                    {freelancer.finishingTime && (
                                                        <div className="text-sm text-gray-500 mt-1">
                                                            Finish by {new Date(freelancer.finishingTime).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {freelancer.expertise.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-[#E5F3F2] text-[#2E6F40] font-medium px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mt-2">
                                                {expanded[freelancer.id]
                                                    ? freelancer.description
                                                    : `${freelancer.description.slice(0, 100)}...`
                                                }
                                                <button
                                                    onClick={() => toggleDescription(freelancer.id)}
                                                    className="text-blue-500 hover:text-blue-600 font-medium ml-1"
                                                >
                                                    {expanded[freelancer.id] ? "Show less" : "Show more"}
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;