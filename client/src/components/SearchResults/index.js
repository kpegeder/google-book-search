import React from "react";
import SearchCard from "../SearchCard";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      {props.results.map((book) => {
        return (
          <SearchCard
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            thumbnail={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg"
            }
            description={book.volumeInfo.description}
            link={book.volumeInfo.previewLink}
            handleSave={props.handleSave}
          />
        );
      })}
    </div>
  );
}

export default SearchResults;
