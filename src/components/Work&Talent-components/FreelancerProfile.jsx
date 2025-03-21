import { Avatar } from "@mantine/core";
import { CalendarDays, MapPin, Star, Briefcase, Award, Clock } from "lucide-react";
import { useState } from "react";

const FreelancerProfile = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Add reviews data
  const reviews = [
    {
      id: 1,
      clientName: "John Smith",
      rating: 5,
      date: "August 2023",
      comment: "Sarah delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise were outstanding.",
      projectTitle: "E-commerce Website Development"
    },
    {
      id: 2,
      clientName: "Emma Wilson",
      rating: 5,
      date: "July 2023",
      comment: "Great communication and delivered the project ahead of schedule. Would definitely work with Sarah again!",
      projectTitle: "Healthcare Dashboard"
    }
  ];

  const freelancer = {
    name: "Sarah Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    rating: 4.9,
    reviews: 127,
    completedProjects: 89,
    successRate: 98,
    location: "Toronto, Canada",
    joinedDate: "March 2022",
    hourlyRate: "$45/hr",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    description: "Experienced full-stack developer with 6+ years of expertise in React, Node.js, and modern web technologies. Passionate about creating intuitive user experiences and scalable solutions.",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "MongoDB", "UI/UX Design", "REST APIs"],
    portfolio: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Built a full-featured e-commerce platform with React and Node.js",
        image: "https://picsum.photos/400/300",
      },
      {
        id: 2,
        title: "Healthcare Dashboard",
        description: "Developed a real-time analytics dashboard for healthcare providers",
        image: "https://picsum.photos/400/301",
      },
      // Add more portfolio items as needed
    ]
  };

  const renderContent = () => {
    switch(selectedTab) {
      case 'portfolio':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Portfolio Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {freelancer.portfolio.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h4 className="text-white font-bold text-lg">{project.title}</h4>
                      <p className="text-white/80 text-sm mt-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Client Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.clientName}</h4>
                      <p className="text-sm text-gray-500">{review.projectTitle}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { description: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                  { category: "Backend", skills: ["Node.js", "Python", "MongoDB", "REST APIs"] },
                  { category: "Cloud & DevOps", skills: ["AWS", "Docker", "CI/CD", "Git"] },
                  { category: "Design", skills: ["UI/UX Design", "Figma", "Adobe XD"] }
                ].map((category, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-[#E5F3F2] text-[#2E6F40] px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
                  { name: "Professional Scrum Master", issuer: "Scrum.org", year: "2022" }
                ].map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-100 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // default:
      //   return (
      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      //       {/* Left Column */}
      //       <div className="md:col-span-2 space-y-8">
      //         {/* About Section */}
      //         <div className="bg-white rounded-lg shadow-sm p-6">
      //           <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
      //           <p className="text-gray-600 leading-relaxed">{freelancer.description}</p>
      //         </div>
              
      //         {/* Portfolio Section */}
      //         <div className="bg-white rounded-lg shadow-sm p-6">
      //           <h3 className="text-xl font-bold text-gray-800 mb-4">Portfolio</h3>
      //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      //             {freelancer.portfolio.map((item) => (
      //               <div key={item.id} className="group cursor-pointer">
      //                 <div className="relative overflow-hidden rounded-lg">
      //                   <img
      //                     src={item.image}
      //                     alt={item.title}
      //                     className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      //                   />
      //                 </div>
      //                 <h4 className="font-semibold mt-3">{item.title}</h4>
      //                 <p className="text-gray-600 text-sm mt-1">{item.description}</p>
      //               </div>
      //             ))}
      //           </div>
      //         </div>
      //       </div>
      //       {/* Right Column */}
      //       <div className="space-y-6">
      //         {/* Stats Card */}
      //         <div className="bg-white rounded-lg shadow-sm p-6">
      //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Stats & Achievements</h3>
      //           <div className="space-y-4">
      //             <div className="flex items-center gap-3">
      //               <Briefcase className="text-[#2E6F40]" size={20} />
      //               <div>
      //                 <div className="font-semibold">{freelancer.completedProjects}</div>
      //                 <div className="text-sm text-gray-500">Projects Completed</div>
      //               </div>
      //             </div>
      //             <div className="flex items-center gap-3">
      //               <Award className="text-[#2E6F40]" size={20} />
      //               <div>
      //                 <div className="font-semibold">{freelancer.successRate}%</div>
      //                 <div className="text-sm text-gray-500">Success Rate</div>
      //               </div>
      //             </div>
      //             <div className="flex items-center gap-3">
      //               <Clock className="text-[#2E6F40]" size={20} />
      //               <div>
      //                 <div className="font-semibold">4 hours</div>
      //                 <div className="text-sm text-gray-500">Avg. Response Time</div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
              
      //         {/* Skills Card */}
      //         <div className="bg-white rounded-lg shadow-sm p-6">
      //           <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
      //           <div className="flex flex-wrap gap-2">
      //             {freelancer.skills.map((skill, index) => (
      //               <span
      //                 key={index}
      //                 className="bg-[#E5F3F2] text-[#2E6F40] px-3 py-1 rounded-full text-sm"
      //               >
      //                 {skill}
      //               </span>
      //             ))}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar
              src={freelancer.avatar}
              size={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">{freelancer.name}</h1>
              <h2 className="text-xl text-gray-600 mt-2">{freelancer.title}</h2>
              
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} fill="currentColor" />
                  <span className="font-semibold">{freelancer.rating}</span>
                  <span className="text-gray-500">({freelancer.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{freelancer.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays size={20} />
                  <span>Member since {freelancer.joinedDate}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{freelancer.hourlyRate}</div>
              <button className="mt-4 bg-[#2E6F40] text-white px-6 py-2 rounded-lg hover:bg-[#245332] transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex gap-8">
            {['Overview', 'Portfolio', 'Reviews', 'Skills'].map((tab) => (
              <li
                key={tab}
                onClick={() => setSelectedTab(tab.toLowerCase())}
                className={`px-4 py-4 cursor-pointer border-b-2 transition-colors ${
                  selectedTab === tab.toLowerCase()
                    ? 'border-[#2E6F40] text-[#2E6F40]'
                    : 'border-transparent text-gray-600 hover:text-[#2E6F40]'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {selectedTab === 'overview' ? (
          // Existing overview layout with two columns
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
                <p className="text-gray-600 leading-relaxed">{freelancer.description}</p>
              </div>
              
              {/* Portfolio Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.portfolio.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold mt-3">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Stats & Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-[#2E6F40]" size={20} />
                    <div>
                      <div className="font-semibold">{freelancer.completedProjects}</div>
                      <div className="text-sm text-gray-500">Projects Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-[#2E6F40]" size={20} />
                    <div>
                      <div className="font-semibold">{freelancer.successRate}%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#2E6F40]" size={20} />
                    <div>
                      <div className="font-semibold">4 hours</div>
                      <div className="text-sm text-gray-500">Avg. Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#E5F3F2] text-[#2E6F40] px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Other tabs content
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerProfile;