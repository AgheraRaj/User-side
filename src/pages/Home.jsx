import { Button } from "@mantine/core";
import { ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

import PopularServices from "../components/Home-components/PopularServices";
import Category from "../components/Home-components/Category";
import ExpertFreelancers from "../components/Home-components/ExpertFreelancers";


function Home() {
  return (
    <div>
      <section className="bg-[#FFFDF2] px-16 py-10 flex justify-between items-center">
        <div className="flex flex-col space-y-10 w-[40%]">
          <h1 className="text-5xl font-semibold leading-15">Find the perfect freelancer services for your business</h1>
          <p>Work with talented people at the most affordable price to get the most out of your time and cost</p>
          <div className="flex space-x-5">
            <Button variant="filled" color="#2e6f40" size="lg">Find Work</Button>
            <Button variant="outline" color="#2e6f40" size="lg">Find Talent</Button>
          </div>
          <div className="mt-10">
            <span>Trusted by</span>
            <div className="h-28 flex">
              <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/tag-heuer-3-logo.png" alt="tagheuer" />
              <img src="https://static.vecteezy.com/system/resources/previews/027/127/493/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png" alt="microsoft" />
              <img src="https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png" alt="spotify" />
              <img src="https://iconape.com/wp-content/png_logo_vector/new-youtube-logo.png" alt="youtube" />
              <img src="https://pnghunter.com/get-logo.php?id=32761" alt="amazon" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-3 justify-center items-center bg-white w-xs h-20 rounded-2xl shadow absolute -bottom-10 right-[350px]">
            <div className="bg-[#cfffdc] h-13 w-13 flex justify-center items-center rounded-full"><Star color="#2e6f40" size={35} strokeWidth={1} /></div>
            <div className="flex flex-col text-[15px]">
              <p className="font-semibold">Proof of quality</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="flex space-x-3 justify-center items-center bg-white w-xs h-20 rounded-2xl shadow absolute top-[450px] right-[10px]">
            <div className="bg-[#cfffdc] h-13 w-13 flex justify-center items-center rounded-full"><ShieldCheck color="#2e6f40" size={35} strokeWidth={1} /></div>
            <div className="flex flex-col text-[15px]">
              <p className="font-semibold">safe and secure</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <img src="https://demoapus1.com/freeio/wp-content/uploads/2023/07/h11.png" alt="image" />
        </div>
      </section>
      <section className="bg-[#cfffdc]">
        <div className="text-center py-14 leading-12">
          <h1 className="text-3xl font-semibold">Popular Services</h1>
          <p>Discover our featured services designed to elevate your experience</p>
        </div>
          <PopularServices />
      </section>
      <section className="bg-[#FFFDF2] flex flex-col items-center">
        <div className="text-center py-14 leading-12">
          <h1 className="text-3xl font-semibold">Browse by Category</h1>
          <p>Explore a wide range of services organized by category</p>
        </div>
        <Category />
        <p className="pb-14 underline text-[18px] font-medium">
          <Link to="">
            All Categories
          </Link>
        </p>
      </section>
      <section className="bg-[#cfffdc]">
        <div className="px-16 py-14 leading-12">
          <h1 className="text-3xl font-semibold">Expert Freelancers</h1>
          <p>Connect with top-rated professionals across various industries. Get high-quality work done quickly and efficiently at the best prices.</p>
        </div>
        <ExpertFreelancers />
      </section>
    </div>
  )
}

export default Home;
