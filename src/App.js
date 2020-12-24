import "./App.css";
import Row from "./Row";
import requests from "./Requests";

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
