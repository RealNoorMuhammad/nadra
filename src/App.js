import { makeStyles } from "@material-ui/core";
import Homepage from "./Page/HomePage";
import "./App.css";
import Divider from "@mui/material/Divider";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Page/CoinPage";

import Signin from "./Page/Signin";

import LiveCrypto from "./Page/LiveCrypto";
import AboutPage from "./Page/AboutPage";
import ContactPage from "./Page/ContactPage";
import PageBrandGuide from "./Page/PageBrandGuide";
import PageCollection from "./Page/PageCollection";
import PageQueen from "./Page/PageQueen";
import PageAthlete from "./Page/PageAthlete";
import PageAfrician from "./Page/PageAfrician";

import Profileone from "./component/Profileone/Profileone";
import Profiletwo from "./component/Profiletwo/Profiletwo";
import Profilethree from "./component/Profilethree/Profilethree";
import Profilefour from "./component/Profilefour/Profilefour";
import Profilefive from "./component/Profilefive/Profilefive";
import Profilesix from "./component/ProfileSix/Profilesix";
import Profileseven from "./component/Profileseven/Pofileseven";
import Profilenine from "./component/Profilenine/Profilenine";

import Footer from "./Page/Footer";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div>
        <div className={classes.App}>
          <Route path="/" component={Homepage} exact />
          <Route path="/Crypto" component={LiveCrypto} exact />
          <Route path="/Aboutus" component={AboutPage} exact />
          <Route path="/Contactus" component={ContactPage} exact />
          <Route path="/BrandGuideliness" component={PageBrandGuide} exact />
          <Route path="/collections" component={PageCollection} exact />
          <Route path="/Queen" component={PageQueen} exact />
          <Route path="/Athlete" component={PageAthlete} exact />
          <Route path="/African" component={PageAfrician} exact />

          <Route path="/Profileone" component={Profileone} exact />
          <Route path="/Profiletwo" component={Profiletwo} exact />
          <Route path="/Profilethree" component={Profilethree} exact />
          <Route path="/Profilefour" component={Profilefour} exact />
          <Route path="/Profilefive" component={Profilefive} exact />
          <Route path="/Profilesix" component={Profilesix} exact />

          <Route path="/Profileseven" component={Profileseven} exact />
          <Route path="/Profilenine" component={Profilenine} exact />

          <Route path="/coins/:id" component={CoinPage} exact />
          <Route path="/signin" component={Signin} exact />

         
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
