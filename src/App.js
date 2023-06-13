import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./components/counter/Counter";
import { addCounter } from "./rtk/counter/counterSlice";

function App() {
  const counters = useSelector((state) => state.counter.nCounter);
  const dispatch = useDispatch();
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {counters.map((counter) => {
        return (
          <div className="max-w-md mx-auto mt-10 space-y-5">
            <Counter id={counter.id} count={counter.count} />
          </div>
        );
      })}
      <button
        className="bg-green-400 text-white px-3 py-2 rounded shadow"
        onClick={() => dispatch(addCounter())}
      >
        Add Counter
      </button>
    </div>
  );
}

export default App;
