import { Button } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center px-10 h-16 border-b border-gray-300 bg-[#253d2c] text-white w-full">
      <div className="flex items-center space-x-5 text-[15px]">
        <div className="text-xl font-semibold mr-10">
          <Link to='/'>ProGigs</Link>
        </div>

        <span className="flex items-center gap-1 font-normal">Hire freelancer <ChevronDown strokeWidth={2} size={16}/></span>
        <span className="flex items-center gap-1 font-normal">Find work <ChevronDown strokeWidth={2} size={16}/></span>
        <span className="font-normal">Blogs</span>
      </div>
      <div className="space-x-5">
      <Link to='/login'>
        <Button variant="transparent" color="#ffffff">Login</Button>
      </Link>
      <Link to='/signup'>
        <Button variant="filled" color="#2e6f40">signup</Button>
      </Link>
      </div>
    </nav>
  )
}

export default Header;
