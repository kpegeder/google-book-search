import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="container">
      <div className="row card-rows">
        <div className="book-cover col-md-4">
          <img
            className="thumbnail"
            src={props.thumbnail}
            alt="Book Cover"
          ></img>
        </div>
        <div className="book-desc col-md-8">
          <div className="row justify-content-end">
            <div className="buttons col-md-3">
              <button className="btn btn-secondary">
                <a
                  className="preview"
                  href={props.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview
                </a>
              </button>
              <button
                className="btn btn-light"
                onClick={(event) => {
                  props.handleSave(event);
                }}
              >
                Save
              </button>
            </div>
          </div>
          <h4>{props.title}</h4>
          <h5>{props.author ? props.author[0] : "Unknown"}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
