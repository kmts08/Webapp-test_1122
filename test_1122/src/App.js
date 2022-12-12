import './App.css';
import Slider from './Slider';
import Header from './header';
import Footer from './footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home(){
  return(
  <>
  <Header />
  <h1>Home</h1>
  <Slider />
  <Footer />
  </>
  )
}
function Weather(){
  const handleChange = () => {
    const value = document.getElementById("area").value
    console.log(value)
    alert(value)
  }
  return(
    <>
    <Header />
    <h1>Weather</h1>
    <p>今日の天気</p>
    <select id="area" onChange={handleChange}>
      <option value="tokyo">東京</option>
      <option value="osaka">大阪</option>
      <option value="sapporo">札幌</option>
  </select>
    <Footer />
    </>
  )
}
function Dashboard(){
  return(
    <>
    <Header />
    <h1>Dashboard</h1>
    <p>ここには何もありません。追加予定も（多分）ありません。</p>
    <Footer />
    </>
  )
}
function NoMatch(){
  return(
    <h1>NoMatch</h1>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
