"use client";
export default function Error({ error, reset }) {
  return (
    <>
      <h1>somthing went wrong</h1>
      <p>{error.message} </p>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}
