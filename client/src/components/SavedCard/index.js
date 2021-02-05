import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactTextCollapse from "react-text-collapse";
import "./style.css";

function SavedCard(props) {
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: "... show more", // text to show when collapsed
    expandText: "show less", // text to show when expanded
    minHeight: 50, // component height when closed
    maxHeight: 200, // expanded to
    textStyle: {
      // pass the css for the collapseText and expandText here
      color: "blue",
      fontSize: "16px",
    },
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={3} className="book-cover">
          <img
            className="thumbnail"
            src={props.thumbnail}
            alt="Book Cover"
          ></img>
        </Col>
        <Col xs={12} md={9} className="book-desc">
          <Row>
            <Col sm={3} className="buttons">
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
            </Col>
          </Row>
          <h4>{props.title}</h4>
          <h5>{props.author ? props.author[0] : "Unknown"}</h5>
          {props.description ? (
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>{props.description}</p>
            </ReactTextCollapse>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SavedCard;
