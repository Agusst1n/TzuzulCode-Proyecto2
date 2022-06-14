import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Router from "./components/Router.js";


const App = () => {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  Router();
};
export default App;
