import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/ramdom";

const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currenBg, setCurrenBg] = useState(getRandomElement(bgs));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrenBg(getRandomElement(bgs));
  };

  return (
    <main className={`App ${currenBg}`}>
      <QuoteBox quote={quote} setQuote={handleChangeQuote} />
    </main>
  );
}

export default App;
