import React from "react";
const { log } = console;
const operationArr = ["+", "-", "x", "÷", "DEL"];
const digitsArr = ["1","2","3","4","5","6","7","8","9"];

export default function Main() {

  return (
    <div className="Main max-w-md bg-white rounded-xl">

      <div className="Display bg-zinc-900 rounded-t-lg text-zinc-200 text-right text-4xl pt-12 pb-4 pr-4">
        <span className="text-lg text-zinc-600">(0)</span> 0
      </div>

      <div className="Operations flex">
        {operationArr.map((eachOperation, index) => {
          return (
            <button className="flex-1 bg-orange-600 hover:bg-orange-700 appearance-none border-none outline-none text-white text-lg transition-all p-8" key={index}>{eachOperation}</button>
          );
        })}
      </div>

      <div className="Digits flex flex-wrap">
        {digitsArr.map((eachDigit, index) => {
          return (
            <button className="flex-3 bg-zinc-400 hover:bg-zinc-600 appearance-none border-none outline-none text-white text-lg transition-all p-8" key={index}>{eachDigit}</button>
          );
        })}
        <button className="flex-3 bg-zinc-400 hover:bg-zinc-600 appearance-none border-none outline-none text-white text-lg transition-all p-8">.</button>
        <button className="flex-3 bg-zinc-400 hover:bg-zinc-600 appearance-none border-none outline-none text-white text-lg transition-all p-8">=</button>
        <button className="flex-3 bg-zinc-400 hover:bg-zinc-600 appearance-none border-none outline-none text-white text-lg transition-all p-8">0</button>
      </div>
    </div>
  );
}
