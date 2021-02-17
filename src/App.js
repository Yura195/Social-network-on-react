import Content from "./components/Content/Content"
import Header from "./components/Header/Header"

const App = (props) => {
  return(
    <div>
      <Header />
      <Content sidebar={props.state.sidebar} profilePage={props.state.profilePage}/>
    </div>
  )
}

export default App
