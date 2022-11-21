import Navbar from "./Componant/Navbar";
import Slider from "./Componant/Slider";
import "./styles.css";

//Data
const slider = [
  {
    id: 1,
    title: "Labrador",
    image:
      "https://www.rover.com/blog/wp-content/uploads/2019/09/Labrador_Retriever-min-1-300x300.jpg"
  },
  {
    id: 2,
    title: "YorkshireTerrier",
    image:
      "https://www.rover.com/blog/wp-content/uploads/2019/09/YorkshireTerrier-min-1-300x300.jpg"
  },
  {
    id: 3,
    title: "Australian Cattle Dog",
    image:
      "https://www.rover.com/blog/wp-content/uploads/2019/09/AustralianCattleDog-min-1-300x300.jpg"
  }
];

const plane = slider.map((el) => (
  <Slider name={el.title} src={el.image} id={el.id} />
));

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {plane}
      <br />
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
