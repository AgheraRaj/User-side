import { Avatar } from "@mantine/core";
import { CalendarDays, CheckCircle, CreditCard, IdCard, Mail, MapPin, Phone, Star, User } from "lucide-react";
import { useState } from "react";

const ProjectDetail = () => {

    const [selectedTab, setSelectedTab] = useState('details');

    const [expanded, setExpanded] = useState({});

    const toggleDescription = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the specific freelancer's description
        }));
    };

    const proposal = [
        {
            id: 1,
            name: "Rabia H.",
            username: "@rabbiawebjuggler",
            rating: 4.9,
            reviews: 258,
            successRate: 98,
            expertise: "MS Excel, Website, WordPress & Scraping Expert",
            description: "As an experienced data analyst, I understand the significance of accessible, accurate information As an experienced data analyst, I understand the significance of accessible, accurate information",
            country: "Pakistan",
            price: "$250.00 CAD",
            duration: "in 1 day",
            responseTime: "Replies within a few hours",
            image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
        },
        {
            id: 2,
            name: "Shuvankar G.",
            username: "@Anderson8592",
            rating: 5.0,
            reviews: 205,
            successRate: 98,
            expertise: "Expert in Data Entry, VA, Scraping, Leads & Listing",
            description: "I have a strong track record in data entry, virtual assistance, and web scraping...",
            country: "Bangladesh",
            price: "Sealed",
            duration: "",
            responseTime: "Replies within a few hours",
            image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
        },
        {
            id: 3,
            name: "Sandeep C.",
            username: "@schoudhary1553",
            rating: 4.9,
            reviews: 946,
            successRate: 95,
            expertise: "PYTHON | R | SAS | POWER-BI | TABLEAU | EXCEL | R | VBA | Coder",
            description: "As a seasoned full-stack developer with over 7 years of experience...",
            country: "India",
            price: "$500.00 CAD",
            duration: "in 7 days",
            responseTime: "Replies within a day",
            image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
        }
    ];

    return (
        <div className="w-full bg-gray-50 min-h-screen">
            {/* Navbar */}
            <nav className="px-4 md:px-20 shadow-sm bg-white sticky top-0 z-10">
                <ul className="flex gap-8 py-4 font-medium">
                    <li
                        onClick={() => setSelectedTab('details')}
                        className={`px-2 pb-2 cursor-pointer transition-all hover:text-[#2E6F40] ${
                            selectedTab === 'details' 
                            ? 'text-[#2E6F40] border-b-[3px] border-[#2E6F40]' 
                            : 'text-gray-600'
                        }`}
                    >
                        Details
                    </li>
                    <li
                        onClick={() => setSelectedTab('proposals')}
                        className={`px-2 pb-2 cursor-pointer transition-all hover:text-[#2E6F40] ${
                            selectedTab === 'proposals' 
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
                                Nihil earum quae in, harum aperiam debitis magnam laboriosam ut tenetur iusto soluta labore odio magni illum perferendis qui id nisi repellendus aut reprehenderit incidunt distinctio modi rerum? Dicta, rem.
                                Eaque nemo aliquid unde magni doloremque, quod dolorem? Saepe fuga enim quasi pariatur assumenda consequuntur iusto corrupti unde repellendus temporibus. Laudantium necessitatibus nam obcaecati neque ipsam veritatis, culpa totam eveniet.
                                Sunt esse ullam tempore voluptatem, sed doloremque! Voluptates quia maiores libero nihil natus quae harum, tempora minima explicabo, commodi error autem hic ea nobis sapiente incidunt eveniet neque consequatur at.
                                Numquam enim repudiandae consequuntur cumque cupiditate natus veritatis earum, dolorum tempore dolore quidem laborum! Deserunt, molestias minima odio dicta voluptates voluptas, nostrum voluptatem quae repudiandae aspernatur necessitatibus rem labore esse.
                                Exercitationem molestiae vero nihil maiores cumque, reprehenderit delectus dolore sequi labore repellat quam voluptatem doloremque ut sunt excepturi ipsa impedit! Ad, nemo cupiditate! Quibusdam, veritatis enim neque libero sequi id.
                                Illum incidunt ut dolorum est architecto? Reprehenderit tempora accusamus iusto dolorum, quis sunt veritatis ducimus totam sit ullam, atque, enim excepturi distinctio rerum sed illum aliquid molestiae quibusdam! Explicabo, in?

                            </p>

                            {/* Skills Section */}
                            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "Node.js"].map((skill, index) => (
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
                                    <span>New York, USA</span>
                                </p>
                                <p className="text-gray-600 flex items-center gap-3">
                                    <CalendarDays size={20} className="text-gray-400" />
                                    <span>Joined: March 2022</span>
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
                        <h2 className="text-2xl font-bold text-gray-800">Proposals</h2>
                        <p className="mt-2 text-gray-600">
                            Below are the proposals submitted by freelancers:
                        </p>

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
                                                    <div className="text-xl font-bold text-gray-800">{freelancer.price}</div>
                                                    {freelancer.duration && (
                                                        <div className="text-sm text-gray-500 mt-1">{freelancer.duration}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-[#2E6F40] font-medium mt-3">{freelancer.expertise}</p>
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