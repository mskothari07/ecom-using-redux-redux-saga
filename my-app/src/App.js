import { addToCart } from "./redux/action";
import {useDispatch} from 'react-redux'
import './App.css';

function App() {

  const dispatach = useDispatch()
  const product = {
    name:'Samsung S20',
    type:'mobile',
    color:'red'
  }

  return (
    <div>
      Hello REdux
      <button onClick={()=>dispatach(addToCart([product]))}>Add to Cart</button>
    </div>
  );
}

export default App;
