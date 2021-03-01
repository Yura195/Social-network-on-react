import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div>
      <Header />
      <Content
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default App;
