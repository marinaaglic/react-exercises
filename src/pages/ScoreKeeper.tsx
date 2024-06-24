import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "score-keeper";
const ScoreKeeper = () => {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedScore ?? "0";
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, score?.toString());
  }, [score]);

  return (
    <>
      <div>
        <h2>SCORE KEEPER</h2>
        <ul>
          Build a scorekeeping application Usin localStorage to store data in
          the browser:
          <li>localStorage.getItem(key)</li>
          <li>localStorage.setItem(key, value)</li>
        </ul>
        <ul>Requirements:</ul>
        <li>
          Use localStorage to store the score so that it persists when you come
          back to the page
        </li>
        <li>
          You should be able to refresh the page and still see the score from
          the previous render
        </li>
        <h1>Your score is: {score}</h1>
        <button
          onClick={() =>
            setScore((prevScore) => (parseInt(prevScore, 10) + 1).toString())
          }
        >
          +
        </button>
        <button
          onClick={() =>
            setScore((prevScore) =>
              Math.max(parseInt(prevScore, 10) - 1, 0).toString()
            )
          }
        >
          -
        </button>
      </div>
      <Link to="/">Back</Link>
    </>
  );
};

export default ScoreKeeper;
