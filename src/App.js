import "./App.css";
import CardsContainer from "./components/CardsContainer/cards-container.component";
const categories = [
  { id: 1, name: "books", imageUrl: "https://i.ibb.co/vX54VYc/books.jpg" },
  { id: 2, name: "music", imageUrl: "https://i.ibb.co/MS03kkn/music.jpg" },
  { id: 3, name: "movies", imageUrl: "https://i.ibb.co/kBNPGRJ/movies.jpg" },
  {
    id: 4,
    name: "video games",
    imageUrl: "https://i.ibb.co/3S3ytkn/computer-games.jpg"
  },
  {
    id: 5,
    name: "board games",
    imageUrl: "https://i.ibb.co/60w4nCJ/board-games.jpg"
  }
];

function App() {
  return (
    <CardsContainer containerType="categories-container" data={categories} />
  );
}

export default App;
