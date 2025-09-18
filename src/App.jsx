import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries";

const countriesApi = async () => {
  try {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    if (!res.ok) {
      throw new Error("Failed to fetch counties");
    }
    return res.json();
  } catch (err) {
    console.log("Countries Api Error: ", err);
  }
};

function App() {
  const countiesPromise = countriesApi();

  return (
    <>
      <h1>World On The Go .....</h1>
      <Suspense fallback={<p>Countries Loading...</p>}>
        <Countries countiesPromise={countiesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
