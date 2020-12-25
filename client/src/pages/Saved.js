import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

function Saved(props) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    API.return()
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Jumbotron />
      <SavedBooks results={book} />
    </div>
  );
}

export default Saved;
