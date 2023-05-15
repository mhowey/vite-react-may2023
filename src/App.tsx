import classes from "./App.module.css";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();
const par1 = lorem.generateParagraphs(1);
const par2 = lorem.generateParagraphs(1);

function App() {
  return (
    <div className={classes.wrapper}>
      <h1>Header Level 1</h1>
      <h2>Header Level 2</h2>
      <h3>Header Level 3</h3>
      <h4>Header Level 4</h4>
      <p>{par1}</p>
      <p>{par2}</p>
    </div>
  );
}

export default App;
