import Card from "./components/Card.jsx";
import {CARS} from "./data.js";
function App() {
  return (
    <>
      <div className="container">
        {CARS.map((car) => (
          <Card make={car.make} model={car.model} year={car.year} color={car.color} img={car.img} />
        ))}
      </div>
    </>
  );
}

export default App;
