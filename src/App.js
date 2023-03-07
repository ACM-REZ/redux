import Counter from "./components/Counter";
import types from "./reducers/app/types";
import Reducers from './reducers/index'

function App() {
  console.log(Reducers)
  console.log(types)
  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;
