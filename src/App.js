import "./App.css";
import { Header } from "./Header.js";
import { Airpods } from "./Airpods.js";
import { Pro } from "./Pro.js";
import { Products } from "./Products.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Airpods />
      <Pro />
      <Products />
    </div>
  );
}

export default App;

// const [count, setCount] = useState(1)

// useEffect(() => {
//   if (count < 146) {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 50);
//   } else {
//     setCount(1);
//   }
// }, [count]);
