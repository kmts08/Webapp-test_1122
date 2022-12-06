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
  return(
    <>
    <Header />
    <h1>Weather</h1>
    <p>今日の天気は<span className='weather'>null</span>です。</p>
    <p>最高気温は<span className='ht'>null</span>、最低気温は<span className='lt'>null</span>です。良い一日を！</p>
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
