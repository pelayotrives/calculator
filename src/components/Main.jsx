import React, { useState } from 'react';
const { log } = console;
const operationArr = ['+', '-', '*', '/', '%'];
const digitsArr = ['1','2','3','4','5','6','7','8','9'];

export default function Main() {

  const [result, setResult] = useState('');

  const handleClick = (event) => {
    setResult(result.concat(event.target.value))
  }

  return (
    <div className='Main max-w-xs md:max-w-md xl:max-w-lg bg-white rounded-xl shadow-md'>

      <div className='Display bg-zinc-900 text-zinc-200 rounded-t-lg text-right text-4xl h-24 p-7 tracking-wider'>
        { result === "" ? <span>0</span> : <span>{result}</span>
        }
      </div>

      <div className='Operations flex'>
        {operationArr.map((eachOperation, index) => {
          return (
            <button value={eachOperation} onClick={handleClick} className='flex-1 bg-orange-600 hover:bg-orange-700 active:bg-orange-500 appearance-none border-none outline-none text-white text-lg transition-all p-4 md:p-6' key={index}>{eachOperation}</button>
          );
        })}
      </div>

      <div className='Delete flex'>
        <button onClick={() => setResult(result.slice(0, result.length - 1))} className='flex-1 bg-red-600 hover:bg-red-700 active:bg-red-500 appearance-none border-none outline-none text-white text-lg transition-all p-4 md:p-6'>DEL</button>
        <button onClick={() => setResult("")} className='flex-1 bg-red-600 hover:bg-red-700 active:bg-red-500 appearance-none border-none outline-none text-white text-lg transition-all p-4 md:p-6'>AC</button>
      </div>

      <div className='Digits flex flex-wrap'>
        {digitsArr.map((eachDigit, index) => {
          return (
            <button value={String(eachDigit)} onClick={handleClick} className='flex-3 bg-zinc-400 hover:bg-zinc-600 active:bg-zinc-700 appearance-none border-none outline-none text-white text-lg transition-all p-4 md:p-8' key={index}>{eachDigit}</button>
          );
        })}
        <button value={"."} onClick={handleClick} className='flex-3 bg-zinc-400 hover:bg-zinc-600 active:bg-zinc-500 appearance-none border-none outline-none text-white text-lg transition-all p-8'>.</button>
        <button value={"0"} onClick={handleClick} className='flex-3 bg-zinc-400 hover:bg-zinc-600 active:bg-zinc-500 appearance-none border-none outline-none text-white text-lg transition-all p-8'>0</button>
        <button className='flex-3 bg-zinc-400 hover:bg-zinc-600 active:bg-zinc-500 appearance-none border-none outline-none text-white text-lg transition-all p-8'>=</button>
      </div>

      <div className='Trademark bg-zinc-800 text-zinc-400 rounded-b-lg font-mono text-xs text-center p-3'>
        <p className='hover:animate-microzoom'>Calculator - Designed by <a className='hover:text-orange-500' href='https://github.com/pelayotrives'>Pelayo Trives</a></p>
      </div>

    </div>
  );
}
