/* eslint-disable no-unreachable */
import React from "react";
import SavedCard from "../SavedCard";
import "./style.css";

function SavedBooks(props) {
  return (
    <div>
      {props.results.map((book) => {
        return (
          <SavedCard
            key={book._id}
            id={book._id}
            title={book.title}
            author={book.author}
            thumbnail={
              book.thumbnail
                ? book.thumbnail
                : "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg"
            }
            description={book.description}
            link={book.link}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
}

export default SavedBooks;
