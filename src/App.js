import { useState, useEffect } from "react";

const axiosBase = require("axios");

const axios = axiosBase.create({
  baseURL: "http://localhost:8000", // cannot get process.env.RAILS_API_APP_URL
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  responseType: "json",
});

async function getBooks() {
  return await axios.get("/api/books");
}

function App() {
  const [books, setBooks] = useState([]);

  // const response = getBooks()
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(response);
  // const data = response.data;
  // console.log(data);

  useEffect(() => {
    getBooks().then((res) => {
      const data = res.data.data;
      console.log(data);
      setBooks(data);
    });
  }, [books]);

  return (
    <ul>
      <li>a</li>
      <li>{books[0].title}</li>
    </ul>
  );
}

export default App;
