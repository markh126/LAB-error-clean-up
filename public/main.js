// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import { htmlStructure, header } from '../components/htmlStructures';
import { startSortingBtn } from '../components/htmlButtons';
import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
