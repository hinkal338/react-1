import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "React 🚀");
const jsxHeading = <h1 id="heading">React with JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

//Component composition - component inside component
const Title = () => {
  return <h1 className="title">Title Compoenent</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">React Functional Compoenent</h1>
  </div>
);
root.render(<HeadingComponent />);

// element inside other element

const element = <span>element</span>;

const title = (
  <div>
    {element}
    <h1>Title element</h1>
  </div>
);
//root.render(title);

// element inside component

const element2 = <h1>React element</h1>;

const ReactComponent = () => (
  <div>
    {element2}
    <h1>React component</h1>
  </div>
);
//root.render(<ReactComponent />);

// React component inside react element

const ReactComponent2 = () => <h1>React component</h1>;

const reactElement = (
  <div>
    <ReactComponent2 />
    <h2>React element</h2>
  </div>
);

//root.render(reactElement);
