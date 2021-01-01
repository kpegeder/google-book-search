import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

function Saved(props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    savedBooks();
  }, []);

  function savedBooks() {
    API.return()
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(event) {
    event.preventDefault();
    API.delete(this.id)
      .then((res) => savedBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Jumbotron />
      <SavedBooks results={book} handleDelete={handleDelete} />
    </div>
  );
}

export default Saved;
