import React from "react";

export default function Main() {

  const operations = () => {
    const operationArr = ["+","-","x","÷","DEL"];
    for (let i = 0; i < 5; i++) {
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" key={i}>{operationArr[i]}</button>
    }
  }

  return (
    <div className="Main">

      <div className="Display">
        <span>(0)</span> 0
      </div>

      <div className="Operations">
        {operations()}
      </div>

      <div className="Digits">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">.</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">=</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">0</button>
      </div>
    </div>
  );
}
