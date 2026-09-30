import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const HeadingComponent = () => {
//   return <h1>Namste React Functional Component!!</h1>;
// };
const elem = <span>React Element</span>;

const number = 10000;
function HeadingComponent() {
  return (
    <div>
      {title}
      <h1>Namste React Functional Component!!</h1>
    </div>
  );
}
const title = (
  <h1>
    {elem}
    Hello using jsx!!!
  </h1>
);

root.render(<HeadingComponent />);
