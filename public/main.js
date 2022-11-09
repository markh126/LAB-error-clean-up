import '../styles/main.scss';
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
