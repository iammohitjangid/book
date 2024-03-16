import { Button, message } from "antd";
import Hero from "../../../components/hero/Hero";
import API from "../../../services/apiAxios";
import React, { useEffect, useState } from "react";
import { ForEach } from "../../../components/ForEach";
import BookCard from "../../../components/bookCard/BookCard";
import { PlusCircleOutlined } from "@ant-design/icons";
import AddBook from "../../../components/addBook/AddBook";

const AdminBook = () => {
  const [bookData, setBookData] = useState([]);
  const [openAddBookModal, setOpenAddBookModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);


  const fetchBooks = async () => {
    try {
      const response = await API.get("api/v1/book");
      setBookData(response?.data?.data?.books);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };
  const fetchAuthors = async () => {
    try {
      const response = await API.get("api/v1/author");
      setAuthors(response?.data?.data?.createdAuthor);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await API.get("api/v1/category");
      setCategories(response?.data?.data?.getCategory);
    } catch (error) {
      message.destroy();
      message.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAuthors();
    fetchCategories();
    fetchBooks();
  }, []);

  const handleOpenModal = () => {
    setOpenAddBookModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddBookModal(false);
  };

  return (
    <div>
      <Hero heading="Books" description="Check out new Books" />
      <div className="flex flex-row flex-wrap justify-center p-8">
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          size="large"
          onClick={handleOpenModal}
        >
          Add New Book
        </Button>

        <ForEach
          of={bookData}
          render={(book, index) => <BookCard key={index} order={book} />}
        />
      </div>
      <AddBook
        open={openAddBookModal}
        setOpen={setOpenAddBookModal}
        categoryData={categories}
        authorData={authors}
      />
    </div>
  );
};

export default AdminBook;
