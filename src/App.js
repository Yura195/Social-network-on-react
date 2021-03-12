import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div>
      <Header />
      <Content
        store={props.store}
      />
    </div>
  );
};

export default App;
