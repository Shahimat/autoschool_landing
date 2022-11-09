import model from 'logic/model/index';
import circles from 'logic/components/Circles';
import fieldset from 'logic/components/Fieldset';
import tabContainer from 'logic/components/TabContainer';
import textArea from 'logic/components/TextArea';
import select from 'logic/components/Select';
import slider from 'logic/components/Slider';
import mailto from 'logic/components/Mailto';
import homePage from 'logic/pages/HomePage';
import pageScroll from 'logic/PageScroll';

jQuery(function () {
  model();
  circles();
  fieldset();
  tabContainer();
  textArea();
  select();
  slider();
  mailto();
  homePage();
  pageScroll();
});
