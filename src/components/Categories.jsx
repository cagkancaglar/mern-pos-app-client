import { useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex md:flex-col gap-4 ">
      {categories.map((category, index) => (
        <li className="category-item" key={index}>
          <span className="capitalize">{category.title}</span>
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:!opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:2xl" />
      </li>
      <li
        className="category-item !bg-orange-800 hover:!opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:2xl" />
      </li>
      <AddCategory
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <EditCategory
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
