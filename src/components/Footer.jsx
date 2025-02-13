import { Button, Input } from "@mantine/core"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"


const Footer = () => {
    return (
        <footer className="bg-[#253d2c] text-white">
            <div className="flex justify-between items-center px-15 h-20">
                <div className="flex space-x-8">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Site Map</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span>Follow Us</span>
                    <span className="h-10 w-10 hover:bg-[#2e6f40] hover:rounded-full flex justify-center items-center"><Facebook /></span>
                    <span className="h-10 w-10 hover:bg-[#2e6f40] hover:rounded-full flex justify-center items-center"><Twitter /></span>
                    <span className="h-10 w-10 hover:bg-[#2e6f40] hover:rounded-full flex justify-center items-center"><Instagram /></span>
                    <span className="h-10 w-10 hover:bg-[#2e6f40] hover:rounded-full flex justify-center items-center"><Linkedin /></span>
                </div>
            </div>
            <div className="flex justify-evenly border-y mx-15 py-10">
                <div className="flex flex-col space-y-3">
                    <span className="font-semibold text-[20px] my-3">About</span>
                    <a href="">About Us</a>
                    <a href="">Become Seller</a>
                    <a href="">Jobs on Freeio</a>
                    <a href="">Pricing</a>
                    <a href="">Services Freeio</a>
                    <a href="">Terms of Service</a>
                </div>
                <div className="flex flex-col space-y-3">
                    <span className="font-semibold text-[20px] my-3">Categories</span>
                    <a href="">Design & Creative</a>
                    <a href="">Development & IT</a>
                    <a href="">Music & Audio</a>
                    <a href="">Programming & Tech</a>
                    <a href="">Digital Marketing</a>
                    <a href="">Finance & Accounting</a>
                    <a href="">Writing & Translation</a>
                    <a href="">Trending</a>
                    <a href="">Lifestyle</a>
                </div>
                <div className="flex flex-col space-y-3">
                    <span className="font-semibold text-[20px] my-3">Support</span>
                    <a href="">Help & Support</a>
                    <a href="">FAQ Freeio</a>
                    <a href="">Contact Us</a>
                    <a href="">Services</a>
                    <a href="">Terms of Service</a>
                </div>
                <div className="flex flex-col space-y-3">
                    <span className="font-semibold text-[20px] my-3">Subscribe</span>
                    <div className="flex bg-white shadow rounded-2xl p-2 w-2xs justify-between">
                        <Input variant="unstyled" placeholder="Your emaul address" />
                        <Button variant="transparent" color="#2e6f40">Send</Button>
                    </div>
                    <span className="font-semibold text-[20px] my-3">Apps</span>
                    <a href="">IOS App</a>
                    <a href="">Android App</a>
                </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-15">
                <p className="text-muted-foreground">
                    &copy; 2024 Raj Aghera. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <div className="hover:underline underline-offset-4">
                        Privacy
                    </div>
                    <div className="hover:underline underline-offset-4">Terms</div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
