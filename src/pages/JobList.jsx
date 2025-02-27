import { Button, Menu, Text } from "@mantine/core";
import { Search } from "lucide-react";

const JobList = () => {
    return (
        <section className="flex justify-between my-10 px-16 py-5 bg-[#FEF1EC]">
            <div className="flex flex-col space-y-5 justify-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Job List</h1>
                    <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
                </div>

                {/* Input Section */}
                <div className="p-4 flex items-center w-full justify-between rounded-md bg-white shadow-md">
                    {/* Job Search Input */}
                    <div className="flex items-center w-full border-r px-4">
                        <Search className="text-black mr-2" size={20} />
                        <input
                            type="text"
                            placeholder="Job, title, skills, or company"
                            className="w-full bg-transparent text-black placeholder:text-black text-lg font-medium focus:outline-none"
                        />
                    </div>

                    {/* Location Dropdown */}
                    <div className="px-4">
                        <Menu>
                            <Menu.Target>
                                <Button size="lg" variant="transparent" color="dark">
                                    <Text size="md" fw={500}>
                                        City, state, or zip
                                    </Text>
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>Location 1</Menu.Item>
                                <Menu.Item>Location 2</Menu.Item>
                                <Menu.Item>Location 3</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </div>

                    {/* Search Button */}
                    <Button className="flex-shrink-0" size="lg" variant="filled" color="#2e6f40">
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
    );
};

export default JobList;
