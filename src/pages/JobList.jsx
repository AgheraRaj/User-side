import { Button, Menu, Text } from "@mantine/core";
import { ChevronDown, Search } from "lucide-react";
import JobResulte from "../components/Work&Talent-components/JobResulte";
import { useState } from "react";

const JobList = () => {

    const [selected, setSelected] = useState("City, state, or zip");

    return (
        <>
            <section className="flex justify-between my-16 px-16 py-5 bg-[#FEF1EC]">
                <div className="flex flex-col space-y-5 justify-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold">Job List</h1>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
                    </div>

                    {/* Input Section */}
                    <div className="p-2.5 flex items-center justify-between rounded-sm bg-white shadow-md">
                        {/* Job Search Input */}
                        <div className="flex items-center w-sm border-r px-4">
                            <Search className="text-black mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Service title, key words"
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
                        src="https://demoapus1.com/freeio/wp-content/uploads/2023/07/h15.png"
                        alt="Job Search"
                        className="w-md"
                    />
                </div>
            </section>
            <section>
                <JobResulte />
            </section>
        </>
    );
};

export default JobList;
