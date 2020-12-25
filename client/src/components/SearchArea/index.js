import React from "react";
import "./style.css";

function SearchArea(props) {
  return (
    <div className="container">
      <h5>Search for a book:</h5>
      <form
        onSubmit={(event) => {
          props.handleSearch(event);
        }}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(event) => {
                props.handleInputChange(event);
              }}
            ></input>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchArea;
