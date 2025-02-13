import { Button } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center px-10 h-16 border-b border-gray-300 bg-[#253d2c] text-white">
      <div className="flex items-center space-x-5 text-[15px]">
        <div className="text-xl font-semibold mr-10">
          <Link to='/'>ProGigs</Link>
        </div>

        <span className="flex items-center gap-1 font-normal">Hire freelancer <ChevronDown strokeWidth={2} size={16}/></span>
        <span className="flex items-center gap-1 font-normal">Find work <ChevronDown strokeWidth={2} size={16}/></span>
        <span className="font-normal">Blogs</span>
      </div>
      <div className="space-x-5">
      <Button variant="transparent" color="#ffffff"><Link to='/login'>Login</Link></Button>
      <Button variant="filled" color="#2e6f40"><Link to='/signup'>signup</Link></Button>
      </div>
    </nav>
  )
}

export default Header;
