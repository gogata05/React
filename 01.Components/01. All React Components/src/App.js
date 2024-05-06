import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion/> */}

      {/* Custom Modal Component */}
      {/* <ModalTest/> */}

      {/* Custom tabs component */}
      {/* <TabTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Image slider components with arrows */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator /> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a Particular Section */}
      {/* <ScrollToSection/> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={5} /> */}

      {/* Tic tac toe */}
      <TicTacToe />
    </div>
  );
}

export default App;
