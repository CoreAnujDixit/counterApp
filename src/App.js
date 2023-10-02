import "./styles.css";
import "tailwindcss/tailwind.css";
import { useState } from "react"; // Import the useState hook from React

export default function App() {
  const [count, setCount] = useState(0);
  function negativeHandler() {
    setCount(count - 1);
  }
  function positiveHandler() {
    setCount(count + 1);
  }
  function resetBtn() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <div className=" text-4xl text-[#45FFCA]">Increment && Decrement</div>
      <div className="bg-white flex gap-10 p-4 rounded-lg font-bold">
        <div className=" text-3xl border-r-4 border-[#F4E869] px-5">
          <button onClick={negativeHandler}> - </button>
        </div>
        <div className=" text-3xl ">{count}</div>
        <div className=" text-3xl border-l-4 border-[#F4E869] px-5">
          <button onClick={positiveHandler}>+</button>
        </div>
      </div>
      <button
        onClick={resetBtn}
        className=" text-2xl text-[#176B87] bg-[#FFA1F5] px-4 rounded-lg"
      >
        RESET
      </button>
    </div>
  );
}
