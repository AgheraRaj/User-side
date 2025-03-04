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
        <div className="w-full">
            {/* Navbar */}
            <nav className="px-20 shadow-md">
                <ul className="flex gap-8 py-4 font-semibold">
                    <li
                        onClick={() => setSelectedTab('details')}
                        className={`px-2 pb-2 cursor-pointer transition ${selectedTab === 'details' ? 'text-[#2E6F40] border-b-[3px] border-[#2E6F40]' : 'text-black'
                            }`}
                    >
                        Details
                    </li>
                    <li
                        onClick={() => setSelectedTab('proposals')}
                        className={`px-2 pb-2 cursor-pointer transition ${selectedTab === 'proposals' ? 'text-[#2E6F40] border-b-[3px] border-[#2E6F40]' : 'text-black'
                            }`}
                    >
                        Proposals
                    </li>
                </ul>
            </nav>

            {/* Content Section */}
            <div className="py-10 px-20">
                {selectedTab === 'details' ? (
                    <div className="mt-5 flex flex-col lg:flex-row gap-10">
                        {/* Left Side - Project Info */}
                        <div className="lg:w-2/3 shadow-md p-5 rounded-md">
                            <h2 className="text-2xl font-semibold">Project Details</h2>
                            <p className="mt-5">
                                Nihil earum quae in, harum aperiam debitis magnam laboriosam ut tenetur iusto soluta labore odio magni illum perferendis qui id nisi repellendus aut reprehenderit incidunt distinctio modi rerum? Dicta, rem.
                                Eaque nemo aliquid unde magni doloremque, quod dolorem? Saepe fuga enim quasi pariatur assumenda consequuntur iusto corrupti unde repellendus temporibus. Laudantium necessitatibus nam obcaecati neque ipsam veritatis, culpa totam eveniet.
                                Sunt esse ullam tempore voluptatem, sed doloremque! Voluptates quia maiores libero nihil natus quae harum, tempora minima explicabo, commodi error autem hic ea nobis sapiente incidunt eveniet neque consequatur at.
                                Numquam enim repudiandae consequuntur cumque cupiditate natus veritatis earum, dolorum tempore dolore quidem laborum! Deserunt, molestias minima odio dicta voluptates voluptas, nostrum voluptatem quae repudiandae aspernatur necessitatibus rem labore esse.
                                Exercitationem molestiae vero nihil maiores cumque, reprehenderit delectus dolore sequi labore repellat quam voluptatem doloremque ut sunt excepturi ipsa impedit! Ad, nemo cupiditate! Quibusdam, veritatis enim neque libero sequi id.
                                Illum incidunt ut dolorum est architecto? Reprehenderit tempora accusamus iusto dolorum, quis sunt veritatis ducimus totam sit ullam, atque, enim excepturi distinctio rerum sed illum aliquid molestiae quibusdam! Explicabo, in?

                            </p>

                            {/* Skills Section */}
                            <h3 className="text-lg font-semibold mt-5">Required Skills</h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "Node.js"].map((skill, index) => (
                                    <span key={index} className="bg-[#E5F3F2] font-semibold text-[#2E6F40] px-3 py-1 text-sm rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Project Status */}
                            <div className="mt-6 flex items-center gap-3">
                                <CheckCircle className="text-[#2E6F40]" size={20} />
                                <span className="text-sm">Project is currently open for proposals.</span>
                            </div>
                        </div>

                        {/* Right Side - Client Details */}
                        <div className="lg:w-2xs h-fit shadow-md p-5 flex flex-col space-y-3 rounded-md">
                            <h3 className="text-md font-semibold">About the Client</h3>
                            <p className="text-sm mt-4 flex gap-3"><MapPin size={18} />New York, USA</p>
                            <p className="text-sm flex gap-3"><CalendarDays size={18} />Joined: March 2022</p>
                            {/* Verification Section */}
                            <h3 className="text-md font-semibold mt-5">Client Verification</h3>
                            <div className="mt-4 space-y-3">
                                <p className="flex gap-3 items-center text-sm"><IdCard size={18} /> identity verified</p>
                                <p className="flex gap-3 items-center text-sm"><User size={18} /> profile verified</p>
                                <p className="flex gap-3 items-center text-sm"><CreditCard size={18} /> payment verified</p>
                                <p className="flex gap-3 items-center text-sm"><Mail size={18} /> email verified</p>
                                <p className="flex gap-3 items-center text-sm"><Phone size={18} /> phone verified</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-10 px-20">
            <h2 className="text-xl font-bold">Proposals</h2>
            <p className="mt-2 text-gray-700">
                Below are the proposals submitted by freelancers:
            </p>

            {/* Proposals List */}
            <div className="mt-4 space-y-4">
                {proposal.map((freelancer) => (
                    <div key={freelancer.id} className="border rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4 bg-white">
                        {/* Profile Image */}
                        <Avatar src={freelancer.image} size={65} alt={freelancer.name} />

                        {/* Freelancer Details */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between pr-10">
                                <h2 className="text-lg font-semibold">{freelancer.name} <span className="text-gray-500">{freelancer.username}</span></h2>
                                <span className="font-bold text-lg">{freelancer.price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-500 mt-1">
                                <Star size={16} /> <span className="font-semibold">{freelancer.rating}</span>
                                <span className="text-gray-500">({freelancer.reviews})</span>
                                <span className="text-[#2E6F40]">{freelancer.successRate}%</span>
                                <MapPin size={16} className="text-gray-600" /> <span className="text-gray-600">{freelancer.country}</span>
                            </div>
                            <p className="text-sm text-gray-700 font-semibold mt-2">{freelancer.expertise}</p>

                            {/* Description with "More" Toggle */}
                            <p className="text-sm text-gray-500 mt-2">
                                {expanded[freelancer.id] ? freelancer.description : `${freelancer.description.slice(0, 50)}...`}
                                <span
                                    onClick={() => toggleDescription(freelancer.id)}
                                    className="text-blue-500 cursor-pointer ml-1"
                                >
                                    {expanded[freelancer.id] ? "less" : "more"}
                                </span>
                            </p>
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