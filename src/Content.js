import { useState, useEffect, useRef } from "react";

function Content() {
  const [count, setCount] = useState(60);
  //useRef() sẽ trả về object có thuộc tính current
  const timerId = useRef();

  const prevCount = useRef();

  //Lưu lại số trước đó
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("start -> ", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop -> ", timerId.current);
  };

  //Xuất ra giá trị hiện tại và giá trị trước đó
  console.log(count, prevCount.current);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Content;
