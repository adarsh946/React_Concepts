import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colorChanger = (color) => {
    setColor(color);
  };
  return (
    <div
      className="bg-black h-screen w-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12 ">
        <div className="flex flex-wrap justify-center shadow-lg gap-4 bg-white p-3 rounded-lg">
          <button
            onClick={() => colorChanger("red")}
            className="bg-red-600 text-white p-2 rounded-2xl"
          >
            Red
          </button>
          <button
            onClick={() => colorChanger("green")}
            className="bg-green-600 text-white p-2 rounded-2xl"
          >
            Green
          </button>
          <button
            onClick={() => colorChanger("black")}
            className="bg-black text-white p-2 rounded-2xl"
          >
            Black
          </button>
          <button
            onClick={() => colorChanger("blue")}
            className="bg-blue-400 text-white p-2 rounded-2xl"
          >
            Blue
          </button>
          <button
            onClick={() => colorChanger("#78350F")}
            className="bg-amber-900 text-white p-2 rounded-2xl"
          >
            Amber
          </button>
          <button
            onClick={() => colorChanger("orange")}
            className="bg-orange-500 text-white p-2 rounded-2xl"
          >
            Orange
          </button>
          <button
            onClick={() => colorChanger("yellow")}
            className="bg-yellow-500 text-white p-2 rounded-2xl"
          >
            Yellow
          </button>
          <button
            onClick={() => colorChanger("pink")}
            className="bg-pink-500 text-white p-2 rounded-2xl"
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
