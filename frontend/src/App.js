import { Route, BrowserRouter } from "react-router-dom";
import lolScreen from "./screen/lol/lolScreen";
import mainScreen from "./screen/mainScreen";
import pubgScreen from "./screen/pubg/pubgScreen";
import pubgAboutScreen from "./screen/pubg/pubgAbout";
import pubgMapsScreen from "./screen/pubg/pubgMaps";
import valorantScreen from "./screen/valorant/valorantScreen";
import Header from "./components/header";
import Footer from "./components/footer";
import PubgMapDetailScreen from "./screen/pubg/pubgMapDetailScreen";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <body>
          <div className="grid-container">
            <Header />
            {/* odkazy */}
            <main>
              <Route
                exact
                path="/pubgMaps/:id"
                component={PubgMapDetailScreen}
              ></Route>
              <Route path="/lol" component={lolScreen}></Route>
              <Route path="/pubg" component={pubgScreen}></Route>
              <Route path="/pubgAbout" component={pubgAboutScreen}></Route>
              <Route path="/pubgMaps" component={pubgMapsScreen} exact></Route>
              <Route path="/valorant" component={valorantScreen}></Route>
              <Route path="/" component={mainScreen} exact></Route>
            </main>
            <Footer />
          </div>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
