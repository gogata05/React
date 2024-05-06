import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";

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
      <QRCodeGenerator />
    </div>
  );
}

export default App;
