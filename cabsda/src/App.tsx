import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={"This is 55550"} />
      <PageTitle title={"This is 030"} />
      <input />
      <input type="password" />
      <input type="date" />

      <div>
        Article 1
        <Rating value={1} />
        Article 2
        <Rating value={2} />
        <Accordion titleValue={"Menu"} collapsed={false} />
        <Accordion titleValue={"Users"} collapsed={true} />
        <div> Article 3</div>
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} />
        <div>This is App 555</div>
      </div>
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
