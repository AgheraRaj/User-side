import { useState, useEffect } from "react";
import { Avatar, Button, Loader } from "@mantine/core";
import {
  MapPin,
  CalendarDays,
  Briefcase,
  Award,
  CreditCard,
  Star,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import axios from "axios";

const ProfileSection = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [counts, setCounts] = useState(null)

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/getProfile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data');
        setLoading(false);
      }
    };

    const fetchCounts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/success-rate`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setCounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data');
        setLoading(false);
      }
    };
    fetchCounts();
    fetchProfileData();
  }, []);



  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/profile/edit`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setIsEditMode(false); // Exit edit mode after saving
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader color="#2E6F40" size="xl" type="bars" />
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-[#2E6F40] text-white px-6 py-2 rounded-lg hover:bg-[#245332] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No profile data available</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (selectedTab) {
      case "portfolio":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Portfolio Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.portfolio.map((project) => (
                <div key={project.portfolioId} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img
                      src={project.portfolioImage || "https://picsum.photos/400/300"}
                      alt={project.portfolioTitle}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h4 className="text-white font-bold text-lg">
                        {project.portfolioTitle}
                      </h4>
                      <p className="text-white/80 text-sm mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-8">
            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Education</h3>
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex justify-between items-start p-4 border border-gray-100 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">{edu.course}</h4>
                      <p className="text-sm text-gray-500">{edu.institute}</p>
                    </div>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Client Reviews
            </h3>
            <p className="text-gray-600">No reviews available yet.</p>
          </div>
        );

      case "certification":
        return (
          <div className="space-y-8">
            {/* Certifications Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {profileData.certification.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex justify-between items-center p-4 border border-gray-100 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {cert.certificateName}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Issued by {cert.certificateIssuer}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(cert.issuedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "bankdetails":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Bank Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#2E6F40]" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {profileData.bank.bankName}
                  </div>
                  <div className="text-sm text-gray-500">Bank Name</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#2E6F40]" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {profileData.bank.accountHolderName}
                  </div>
                  <div className="text-sm text-gray-500">Account Holder Name</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#2E6F40]" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {profileData.bank.accountNumber}
                  </div>
                  <div className="text-sm text-gray-500">Account Number</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#2E6F40]" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {profileData.bank.ifscCode}
                  </div>
                  <div className="text-sm text-gray-500">IFSC Code</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[#2E6F40]" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {profileData.bank.branch}
                  </div>
                  <div className="text-sm text-gray-500">Branch</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  About Me
                </h3>
                {isEditMode ? (
                  <textarea
                    value={profileData.description}
                    onChange={(e) =>
                      setProfileData({ ...profileData, description: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {profileData.description}
                  </p>
                )}
              </div>
              {/* Portfolio Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Portfolio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profileData.portfolio.map((item) => (
                    <div key={item.portfolioId} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={item.portfolioImage || "https://picsum.photos/400/300"}
                          alt={item.portfolioTitle}
                          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold mt-3">
                        {item.portfolioTitle}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Column */}
            {/* Right Column */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Stats & Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-[#2E6F40]" size={20} />
                    <div>
                      <div className="font-semibold">{counts.completedProject}</div>
                      <div className="text-sm text-gray-500">Projects Completed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-[#2E6F40]" size={20} />
                    <div>
                      <div className="font-semibold">{counts.successRate}%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {isEditMode ? (
                        <>
                          <input
                            value={skill}
                            onChange={(e) => {
                              const updatedSkills = [...profileData.skills];
                              updatedSkills[index] = e.target.value;
                              setProfileData({ ...profileData, skills: updatedSkills });
                            }}
                            className="p-2 border border-gray-300 rounded"
                          />
                          <Button
                            onClick={() => {
                              const updatedSkills = profileData.skills.filter(
                                (_, i) => i !== index
                              );
                              setProfileData({ ...profileData, skills: updatedSkills });
                            }}
                            variant="transparent"
                            color="red"
                          >
                            Remove
                          </Button>
                        </>
                      ) : (
                        <span className="bg-[#E5F3F2] text-[#2E6F40] px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      )}
                    </div>
                  ))}
                  {isEditMode && (
                    <Button
                      onClick={() => {
                        setProfileData({
                          ...profileData,
                          skills: [...profileData.skills, ""],
                        });
                      }}
                      variant="transparent"
                      color="dark"
                    >
                      + Add Skill
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Picture */}
            <Avatar
              src={profileData.imageUrl}
              size={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-800">
                {isEditMode ? (
                  <input
                    value={profileData.fullName}
                    onChange={(e) =>
                      setProfileData({ ...profileData, fullName: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  profileData.fullName
                )}
              </h1>

              {/* Field of Work */}
              {isEditMode ? (
                <textarea
                  value={profileData.fieldOfWork}
                  onChange={(e) =>
                    setProfileData({ ...profileData, fieldOfWork: e.target.value })
                  }
                  className="p-2 h-11 border border-gray-300 rounded mt-2"
                />
              ) : (
                <h2 className="text-gray-600 leading-relaxed mt-2">
                  {profileData.fieldOfWork}
                </h2>
              )}

              {/* Additional Fields: Email, Phone, Company Name */}
              <div className="flex flex-wrap gap-6 mt-4">
                {/* Email */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={20} />
                  {isEditMode ? (
                    <input
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({ ...profileData, email: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded w-64"
                    />
                  ) : (
                    <span>{profileData.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={20} />
                  {isEditMode ? (
                    <input
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({ ...profileData, phone: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded w-48"
                    />
                  ) : (
                    <span>{profileData.phone}</span>
                  )}
                </div>

                {/* Company Name */}
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 size={20} />
                  {isEditMode ? (
                    <input
                      value={profileData.companyName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, companyName: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded w-48"
                    />
                  ) : (
                    <span>{profileData.companyName}</span>
                  )}
                </div>
              </div>

              {/* Status, Location, Joining Date */}
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2">
                  {profileData.status === "VERIFIED" && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Verified
                    </span>
                  )}
                  {profileData.status !== "VERIFIED" && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                      Pending Verification
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} fill="currentColor" />
                  <span className="font-semibold">{counts.rating}</span>
                  <span className="text-gray-500">({counts.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} />
                  {isEditMode ? (
                    <input
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData({ ...profileData, location: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded w-48"
                    />
                  ) : (
                    <span>{profileData.location}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays size={20} />
                  <span>Member since {profileData.user.joiningDate}</span>
                </div>
              </div>
            </div>

            {/* Hourly Rate and Edit Buttons */}
            <div className="text-right">
            {isEditMode ? (
                    <input
                      value={profileData.hourlyRate}
                      onChange={(e) =>
                        setProfileData({ ...profileData, hourlyRate: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-gray-800">
                {profileData.hourlyRate}
              </div>
                  )}
              <Button
                variant="filled"
                color="#2E6F40"
                className="mt-4 px-6 py-2 rounded-lg transition-colors"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                {isEditMode ? "Cancel" : "Edit Profile"}
              </Button>
              {isEditMode && (
                <Button
                  variant="outline"
                  color="#2E6F40"
                  className="mt-4 ml-4 px-6 py-2 rounded-lg transition-colors"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex gap-8">
            {[
              "Overview",
              "Portfolio",
              "Reviews",
              "Education",
              "Certification",
              "Bank Details",
            ].map((tab) => (
              <li
                key={tab}
                onClick={() =>
                  setSelectedTab(tab.toLowerCase().replace(/ /g, ""))
                }
                className={`px-4 py-4 cursor-pointer border-b-2 transition-colors ${selectedTab === tab.toLowerCase().replace(/ /g, "")
                  ? "border-[#2E6F40] text-[#2E6F40]"
                  : "border-transparent text-gray-600 hover:text-[#2E6F40]"
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
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfileSection;