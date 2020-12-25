/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Search books by title
  search: function (title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // Get books from database
  return: function () {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  save: function (data) {
    return axios.post("/api/books", data);
  },
  // Deletes the book with the given id
  delete: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
