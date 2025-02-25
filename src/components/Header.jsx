import { useState } from "react";
import { Button } from "@mantine/core";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [showHireDropdown, setShowHireDropdown] = useState(false);
  const [showFindWorkDropdown, setShowFindWorkDropdown] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track active submenu

  return (
    <div className="relative z-10 w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 h-16 border-b border-gray-300 bg-[#253d2c] text-white w-full">
        <div className="flex items-center space-x-5 text-[15px]">
          <div className="text-xl font-semibold mr-10">
            <Link to="/">ProGigs</Link>
          </div>

          {/* Hire Freelancer Dropdown */}
          <div
            className="relative flex items-center gap-1 font-normal hover:text-[#68BA7F] h-16 cursor-pointer"
            onMouseEnter={() => setShowHireDropdown(true)}
            onMouseLeave={() => setShowHireDropdown(false)}
          >
            Hire freelancer <ChevronDown strokeWidth={2} size={16} />
          </div>

          {/* Find Work Dropdown */}
          <div
            className="relative flex items-center gap-1 font-normal hover:text-[#68BA7F] h-16 cursor-pointer"
            onMouseEnter={() => setShowFindWorkDropdown(true)}
            onMouseLeave={() => setShowFindWorkDropdown(false)}
          >
            Find work <ChevronDown strokeWidth={2} size={16} />
          </div>

          <span className="font-normal hover:text-[#68BA7F]">Blogs</span>
        </div>

        <div className="space-x-5">
          <Link to="/login">
            <Button variant="transparent" color="#ffffff">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="filled" color="#2e6f40">
              Signup
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hire Freelancer Dropdown Content */}
      {showHireDropdown && (
        <div
          className="absolute top-16 right-0 w-[1360px] border-t border-gray-300 shadow-md flex"
          onMouseEnter={() => setShowHireDropdown(true)}
          onMouseLeave={() => setShowHireDropdown(false)}
        >
          {/* Left Panel */}
          <div className="w-[40%] bg-white flex flex-col space-y-3 p-4">
            <div
              className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]"
              onMouseEnter={() => setActiveSubMenu("skill")}
            >
              <div>
                <h1 className="font-semibold">By Skill</h1>
                <p className="text-sm">Looking for a freelancer with specific skills? Start here.</p>
              </div>
              <ChevronRight />
            </div>

            <div
              className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]"
              onMouseEnter={() => setActiveSubMenu("location")}
            >
              <div>
                <h1 className="font-semibold">By Location</h1>
                <p className="text-sm">Search for freelancers  based on their location and timezone.</p>
              </div>
              <ChevronRight />
            </div>

            <div className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]">
              <div>
                <h1 className="font-semibold">By Category</h1>
                <p className="text-sm">Find freelancers that suit a certain project category.</p>
              </div>
              
            </div>
          </div>

          {/* Right Panel (Submenu) */}
          {activeSubMenu && (
            <div className="w-full bg-white p-5  border-l border-[#2E6F40]">
              {activeSubMenu === "skill" && (
                <div className="flex">
                  <div className="grid grid-cols-3 grid-rows-2 gap-5">

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/graphic-design.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">Graphic designers</div>
                    </div>

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/website.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">Website designers</div>
                    </div>

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/mobile.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">Mobile app developers</div>
                    </div>

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/sd.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">Softewar developers</div>
                    </div>

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/3d.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">3D artists</div>
                    </div>

                    <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-skills/illustration.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-20 rounded-b-md flex justify-center items-center">Illustration</div>
                    </div>

                  </div>

                  <div className="flex flex-col mx-auto">
                  <h2 className="text-lg font-semibold mb-3">Other popular skills</h2>
                  <ul className="space-y-2">
                    <li className="cursor-pointer">Web developers</li>
                    <li className="cursor-pointer">Writers</li>
                    <li className="cursor-pointer">Marketing specialists</li>
                    <li className="cursor-pointer">SEO specialists</li>
                    <li className="cursor-pointer">Data entry clerks</li>
                    <li className="cursor-pointer">Virtual assistants</li>
                    <li className="cursor-pointer">Translators</li>
                    <li className="cursor-pointer">Financial exports</li>
                    <li className="cursor-pointer">Manufacturers</li>
                    <li className="cursor-pointer">Logistics experts</li>
                    <li className="cursor-pointer">Fashion designers</li>
                    <button className="flex items-center gap-1">Find out more <ChevronRight /></button>
                  </ul>
                  </div>
                </div>
              )}

              {activeSubMenu === "location" && (
                <div className="flex">

                <div className="flex flex-col mx-auto">
                <h2 className="text-lg font-semibold mb-3">Choose from millions of freelancers worldwide.</h2>
                <ul className="space-y-2">
                  <li className="cursor-pointer">United States</li>
                  <li className="cursor-pointer">United Kingdom</li>
                  <li className="cursor-pointer">Canada</li>
                  <li className="cursor-pointer">India</li>
                  <li className="cursor-pointer">Australia</li>
                  <li className="cursor-pointer">Paris</li>
                  <li className="cursor-pointer">Bangladesh</li>
                  <li className="cursor-pointer">Indonesia</li>
                  <li className="cursor-pointer">Brazil</li>
                  <li className="cursor-pointer">China</li>
                  <li className="cursor-pointer">Turkey</li>
                  <li className="cursor-pointer">Philippines</li>
                  <button className="flex items-center gap-1">Find out more <ChevronRight /></button>
                </ul>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
                  <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-1.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Working with international freelancers</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-2.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Where to find the best developers</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-3.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Do you need a local freelancer?</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col transition-transform duration-300 hover:scale-105">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-4.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Building an international team</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>
                </div>

              </div>
              )}

            </div>
          )}
        </div>
      )}

      {/* Find Work Dropdown Content */}
      {showFindWorkDropdown && (
        <div
          className="absolute top-16 right-0 w-[1210px] flex bg-white border-t border-gray-300 shadow-md"
          onMouseEnter={() => setShowFindWorkDropdown(true)}
          onMouseLeave={() => setShowFindWorkDropdown(false)}
        >
          {/* Left Panel */}
          <div className="w-[40%] bg-white flex flex-col space-y-3 p-4">
            <div
              className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]"
              onMouseEnter={() => setActiveSubMenu("skill")}
            >
              <div>
                <h1 className="font-semibold">By Skill</h1>
                <p className="text-sm">Searching for work that requires a particular skill.</p>
              </div>
              <ChevronRight />
            </div>

            <div
              className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]"
              onMouseEnter={() => setActiveSubMenu("location")}
            >
              <div>
                <h1 className="font-semibold">By Location</h1>
                <p className="text-sm">Search for freelancers  based on their location and timezone.</p>
              </div>
              <ChevronRight />
            </div>

            <div className="border-[#2E6F40] border h-24 rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-[#2e6f400d]">
              <div>
                <h1 className="font-semibold">Featured jobs</h1>
                <p className="text-sm">Explore our current list of excited top featured projects.</p>
              </div>
              
            </div>
          </div>

          {/* Right Panel (Submenu) */}
          {activeSubMenu && (
            <div className="w-full bg-white p-5  border-l border-[#2E6F40]">
              {activeSubMenu === "skill" && (
                <div className="flex">
                  <div className="grid grid-cols-3 grid-rows-2 gap-6 py-2">

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/website.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center">Website jobs</div>
                    </div>

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/graphic-design.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center">Graphic design jobs</div>
                    </div>

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/data-entry.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center">Data entry jobs</div>
                    </div>

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/mobile.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center text-center">Mobile app development</div>
                    </div>

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/internet-marketing.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center text-center">Internet marketing jobs</div>
                    </div>

                    <div className="flex flex-col size-44 transition-transform duration-300 hover:scale-105">
                      <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/find-job/local.png" alt="" className="rounded-t-md" />
                      <div className="font-semibold bg-black text-white h-16 rounded-b-md flex justify-center items-center">Local jobs</div>
                    </div>

                  </div>

                  <div className="flex flex-col ml-7">
                  <h2 className="text-lg font-semibold mb-3">Other popular jobs</h2>
                  <ul className="space-y-2">
                    <li className="cursor-pointer">Software development jobs</li>
                    <li className="cursor-pointer">Internet marketing jobs</li>
                    <li className="cursor-pointer">Data entry jobs</li>
                    <li className="cursor-pointer">SEO jobs</li>
                    <li className="cursor-pointer">Writing jobs</li>
                    <li className="cursor-pointer">Legal jobs</li>
                    <li className="cursor-pointer">Finance jobs</li>
                    <li className="cursor-pointer">Manufacturing jobs</li>
                    <li className="cursor-pointer">Logistics jobs</li>
                    <button className="flex items-center gap-1">Find out more <ChevronRight /></button>
                  </ul>
                  </div>
                </div>
              )}

              {activeSubMenu === "location" && (
                <div className="flex">

                <div className="flex flex-col mx-auto">
                <h2 className="text-lg font-semibold mb-3">Choose from millions of freelancers worldwide.</h2>
                <ul className="space-y-2">
                  <li className="cursor-pointer">United States</li>
                  <li className="cursor-pointer">United Kingdom</li>
                  <li className="cursor-pointer">Canada</li>
                  <li className="cursor-pointer">India</li>
                  <li className="cursor-pointer">Australia</li>
                  <li className="cursor-pointer">Paris</li>
                  <li className="cursor-pointer">Bangladesh</li>
                  <li className="cursor-pointer">Indonesia</li>
                  <li className="cursor-pointer">Brazil</li>
                  <li className="cursor-pointer">China</li>
                  <li className="cursor-pointer">Turkey</li>
                  <li className="cursor-pointer">Philippines</li>
                  <button className="flex items-center gap-1">Find out more <ChevronRight /></button>
                </ul>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="flex flex-col">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-1.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Working with international freelancers</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-2.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Where to find the best developers</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-3.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Do you need a local freelancer?</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <img src="https://www.f-cdn.com/assets/main/en/assets/logged-out-navigation/hire-location/location-4.jpg" alt="" className="rounded-t-md" />
                    <div className="font-semibold bg-black text-white h-24 rounded-b-md flex flex-col justify-center text-start px-2">
                      <p>Building an international team</p>
                      <button className="flex items-center gap-1 text-[#68BA7F]">Find out more <ChevronRight /></button>
                    </div>
                  </div>
                </div>

              </div>
              )}

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
