import CardsContainer from "../../components/CardsContainer/cards-container.component";


const categories = [
  { id: 1, name: "books", imageUrl: "https://i.ibb.co/vX54VYc/books.jpg" },
  { id: 2, name: "music", imageUrl: "https://i.ibb.co/1Ls99Py/music2.jpg" },
  { id: 3, name: "movies", imageUrl: "https://i.ibb.co/RYMRMLT/movies1.jpg" },
  {
    id: 4,
    name: "video games",
    imageUrl: "https://i.ibb.co/mJ5FqT5/video-games.jpg"
  },
    {
    id: 5,
    name: "board games",
    imageUrl: "https://i.ibb.co/60w4nCJ/board-games.jpg"
  }
];

const Home = () => {
    return ( 
    <CardsContainer containerType="categories-container" data={categories} />
    )
}

export default Home;