const router = require("express").Router();
const axios = require("axios");

router.route("/").get((req, res) => {
  const { query: params } = req;
  axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params,
    })
    .then((results) =>
      results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      )
    );
});

module.exports = router;

// module.exports = {
//   findAll: function (req, res) {
//     const { query: params } = req;
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes", {
//         params,
//       })
//       .then((results) =>
//         results.data.items.filter(
//           (result) =>
//             result.volumeInfo.title &&
//             result.volumeInfo.infoLink &&
//             result.volumeInfo.authors &&
//             result.volumeInfo.description &&
//             result.volumeInfo.imageLinks &&
//             result.volumeInfo.imageLinks.thumbnail
//         )
//       );
//   },
// };
