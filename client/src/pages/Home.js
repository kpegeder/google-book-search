import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";
// import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";
import SearchArea from "../components/SearchArea";

function Home() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;

    setSearch({ search, value });
  }

  // Handle search Google Books API
  function handleSearch(event) {
    event.preventDefault();
    console.log(search.value);
    API.search(search.value).then((res) => {
      setBooks(res.data.items);
    });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSave(event) {
    event.preventDefault();

    API.save({
      title: this.title,
      author: this.author[0],
      description: this.description,
      thumbnail: this.thumbnail,
      link: this.link,
    })
      .then((res) => console.log("Book has been saved"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron />
      <SearchArea
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <SearchResults results={books} handleSave={handleSave} />
    </div>
  );
}

export default Home;
