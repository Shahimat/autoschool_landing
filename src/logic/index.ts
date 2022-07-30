import model from "./model/index";
import circles from "./components/Circles";
import fieldset from "./components/Fieldset";
import tabContainer from "./components/TabContainer";
import textArea from "./components/TextArea";
import select from "./components/Select";
import slider from "./components/Slider";
import mailto from "./components/Mailto";
import homePage from "./pages/HomePage";
import pageScroll from "./PageScroll";

function run() {
  model();
  circles();
  fieldset();
  tabContainer();
  textArea();
  select()
  slider();
  mailto();
  homePage();
  pageScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', run);
} else {
  run();
}