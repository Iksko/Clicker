import Clicker from "./components/Clicker"

const App = () => {

  return(
    <>
      <header>
        <p>CLICKER</p>
        <p>Count your clicks easily</p>
      </header>
      <div className="content">
        <Clicker></Clicker>
      </div>
      <footer>
        <p>CLICKER © 2024</p>
      </footer>
    </>
  )
}
export default App