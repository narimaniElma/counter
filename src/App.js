import { useState } from "react";
import styles from "./App.module.css";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  const myStyle = {color: 'aqua', border: '1px solid red'};
  //Inline Styling : background-color -> backgroundColor

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 style={myStyle}>My counter</h1>
      </header>
      <Counter increas={increaseCount} decrease={decreaseCount} reset={resetCount} count={count}/>
    </div>
  );
}

export default App;
