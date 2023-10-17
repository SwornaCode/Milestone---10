
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCart from "./Components/CoffeeCart";

function App() {

  const coffees = useLoaderData()

  return (
    <>
    <div className="m-20">
      <h1 className="text-5xl text-center my-20 text-purple-600">Hot Hot Cold Coffee: {coffees.length}</h1>
     <div className="grid md:grid-cols-2 gap-4">
     {
        coffees.map(coffee => <CoffeeCart
        key={coffee._id}
        coffee={coffee}
        > 
        </CoffeeCart>)
      }
     </div>
      </div>
    </>
  );
}

export default App;
