import React from "react"
import ReactDOM from "react-dom"

//this is only one element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world using ReactJs!!"
);

//how we show nested element and how it is works
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "innerdiv" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("p", {}, "I am p tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "innerdiv2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("p", {}, "I am p tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "innerdiv3" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("p", {}, "I am p tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(heading); //its basically returns the object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
