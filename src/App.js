import React, { useState } from "react";
import "./styles.css";
import image11 from "../public/images/img1.jpg";

const books = [
  {
    id: "01",
    type: "horror",
    rating: "4.4/5",
    location: image11,
    name: "Stephen Jones"
  },
  {
    id: "02",
    type: "horror",
    rating: "5/5",
    location: require("../public/images/img2.jpg"),
    name: "Silvia Garcia"
  },
  {
    id: "03",
    type: "horror",
    rating: "3/5",
    location: require("../public/images/img3.jpg"),
    name: "Daveed Digs"
  },
  {
    id: "04",
    type: "horror",
    rating: "4.2/5",
    location: require("../public/images/img4.jpg"),
    name: "Rachel Harrison"
  },
  {
    id: "05",
    type: "horror",
    rating: "3.4/5",
    location: require("../public/images/img5.jpg"),
    name: "David Quantick"
  },
  {
    id: "06",
    type: "horror",
    rating: "4.3/5",
    location: require("../public/images/img6.jpg"),
    name: "Todd Keisling"
  },
  {
    id: "07",
    type: "biography",
    rating: "4.8/5",
    location: require("../public/images/imgb1.png"),
    name: "Barak Obama"
  },
  {
    id: "08",
    type: "biography",
    rating: "3.6/5",
    location: require("../public/images/imgb2.jpg"),
    name: "Deborah Tannen"
  },
  {
    id: "09",
    type: "biography",
    rating: "4/5",
    location: require("../public/images/imgb3.jpg"),
    name: "A N Wilson"
  },
  {
    id: "10",
    type: "biography",
    rating: "3.8/5",
    location: require("../public/images/imgb4.jpg"),
    name: "Willie Mays"
  },
  {
    id: "11",
    type: "biography",
    rating: "4.2/5",
    location: require("../public/images/imgi6.jpg"),
    name: "Betsy Bonner"
  },
  {
    id: "12",
    type: "biography",
    rating: "4.8/5",
    location: require("../public/images/imgb6.jpg"),
    name: "Oliver Craske"
  },
  {
    id: "13",
    type: "fiction",
    rating: "3.8/5",
    location: require("../public/images/img12.jpg"),
    name: "James McBride"
  },
  {
    id: "14",
    type: "fiction",
    rating: "4.2/5",
    location: require("../public/images/img22.jpg"),
    name: "Lydia Millet"
  },
  {
    id: "15",
    type: "fiction",
    rating: "3.6/5",
    location: require("../public/images/img33.jpg"),
    name: "Natasha Trethewey"
  },
  {
    id: "16",
    type: "fiction",
    rating: "3.5/5",
    location: require("../public/images/img44.jpg"),
    name: "Emma Donoghue"
  },
  {
    id: "17",
    type: "fiction",
    rating: "4.8/5",
    location: require("../public/images/img55.jpg"),
    name: "Terry McMillan"
  },
  {
    id: "18",
    type: "fiction",
    rating: "4.2/5",
    location: require("../public/images/img66.jpg"),
    name: "Alyssa Cole"
  }
];

export default function App() {
  const [book, setBook] = useState(books);
  const handleChange = (e) => {
    const filtered = books.filter((b) =>
      b.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setBook(filtered);
  };
  const handleClick = (type) => {
    const newBook = books.filter((b) => b.type === type);
    setBook(newBook);
  };

  return (
    <div className="App">
      <div className="head" style={{ padding: "2rem", fontSize: "20px" }}>
        <h1>BookLand</h1>
      </div>
      <nav className="nav">
        <button className="btn" onClick={() => handleClick("horror")}>
          {" "}
          Horror{" "}
        </button>
        <button className="btn" onClick={() => handleClick("biography")}>
          Biography{" "}
        </button>
        <button className="btn" onClick={() => handleClick("fiction")}>
          Fiction{" "}
        </button>
      </nav>
      <div style={{ color: "#fff" }} className="input-section">
        <input
          className="input"
          onChange={handleChange}
          placeholder="Search by author name"
          type="search"
        />
      </div>
      <div className="menu">
        {book.map((b) => (
          <div className="menu-item" key={b.id}>
            <img src={b.location} alt={b.name} width={150} />
            <h4 className="menu-heading">Author:{b.name}</h4>
            <small className="menu-small">Rating:{b.rating}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
