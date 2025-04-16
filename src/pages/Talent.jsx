import { Button, Menu, Text } from "@mantine/core";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import JobTalent from "../components/Work&Talent-components/JobTalent";

const Talent = () => {

    const [selected, setSelected] = useState("All Categories");

    return (
        <>
            <section className="flex justify-between my-16 px-16 py-5 bg-purple-100">
                <div className="flex flex-col space-y-5 justify-center">
                    <div className="space-y-3 w-2xl">
                        <h1 className="text-3xl font-semibold">Discover Top Talent</h1>
                        <p>Access a diverse pool of freelancers ready to meet your needs. Simplify your search for the perfect service provider.</p>
                    </div>

                    {/* Input Section */}
                    <div className="p-2.5 flex items-center justify-between rounded-sm bg-white shadow-md">
                        {/* Job Search Input */}
                        <div className="flex items-center w-sm border-r px-4">
                            <Search className="text-black mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Job, title, skills, or company"
                                className="w-full bg-transparent text-black placeholder:text-black placeholder:text-sm font-medium focus:outline-none"
                            />
                        </div>

                        {/* Location Dropdown */}
                        <div className="px-4 w-xs">
                            <Menu>
                                <Menu.Target>
                                    <Button size="lg" variant="transparent" color="dark">
                                        <Text className="flex items-center gap-2" size="sm" fw={500}>
                                            {selected} <ChevronDown size={20} />
                                        </Text>
                                    </Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item onClick={() => setSelected("Location 1")}>Location 1</Menu.Item>
                                    <Menu.Item onClick={() => setSelected("Location 2")}>Location 2</Menu.Item>
                                    <Menu.Item onClick={() => setSelected("Location 3")}>Location 3</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>

                        {/* Search Button */}
                        <Button className="flex-shrink-0" size="xl" variant="filled" color="#2e6f40">
                            Search
                        </Button>
                    </div>
                </div>

                {/* Right-Side Image */}
                <div>
                    <img
                        src="https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/slider5.png"
                        alt=""
                        className="w-md relative top-5"
                    />
                </div>
            </section>
            <section>
                <JobTalent />
            </section>
        </>
    )
}

export default Talent
