// const heading = React.createElement("h1", {id: "heading", abc: }, "hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {id: "parent"}, 
               React.createElement("div", {id: "child"}, 
               [React.createElement("h1", {}, "h1 tag"),
               React.createElement("h2", {}, "h2 tag")]));
const nested = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
nested.render(parent)