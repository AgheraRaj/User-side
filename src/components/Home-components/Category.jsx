

const categories = [
  { name: "Development & IT", services: 8, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category1.svg" },
  { name: "Design & Creative", services: 8, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category4.svg" },
  { name: "Digital Marketing", services: 1, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category2.svg" },
  { name: "Writing & Translation", services: 1, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category3.svg" },
  { name: "Music & Audio", services: 0, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category5.svg" },
  { name: "Video & Animation", services: 0, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category6.svg" },
  { name: "Programming & Tech", services: 1, icon: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category7.svg" },
];

function Category() {

  return (
    <div className="w-full text-center p-6">
      {/* Categories Container */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar p-2 justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 w-[180px] h-[140px] rounded-lg shadow-sm border cursor-pointer transition-all bg-white border-gray-300 text-gray-700 hover:shadow-md"
            }`}
          >
            <img src={category.icon} alt={category.name} className="w-10 h-10 mb-2" />
            <p className="text-sm font-medium">{category.services} {category.services === 1 ? "Service" : "Services"}</p>
            <p className="text-base font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
