
const categories = [
    {
      name: "Graphic & Design",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category1.svg",
    },
    {
      name: "Digital Marketing",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category4.svg",
    },
    {
      name: "Writing",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category2.svg",
    },
    {
      name: "Videos",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category3.svg",
    },
    {
      name: "Music",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category5.svg",
    },
    {
      name: "Photography",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category6.svg",
    },
    {
      name: "Animation",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category7.svg",
    },
    {
      name: "Programming",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category8.svg",
    },
    {
      name: "Data Server",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category9.svg",
    },
    {
      name: "Business",
      image: "https://demoapus2.com/freelanhub/wp-content/uploads/2024/07/category10.svg",
    },
  ];
  
  function Category() {
    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-10 px-20">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-4 p-6 bg-white border border-gray-200 shadow-md rounded-md "
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default Category
  