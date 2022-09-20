import ContentLoader from './scripts/ContentLoader';
import loadPrimaryHeader from './scripts/loadPrimaryHeader';
import loadPrimaryNav from './scripts/loadPrimaryNav';
import loadFooter from './scripts/loadFooter';
import loadHomeContents from './scripts/loadHomeContents';
import loadMenuContents from './scripts/loadMenuContents';
import './styles.css';

ContentLoader.loadFirst(loadPrimaryHeader(), 'primary-header');
ContentLoader.load(loadFooter(), 'footer');

ContentLoader.loadAfter(loadPrimaryNav('home', {
  home: () => {
    ContentLoader.removeFrom('primary-nav', 'footer', { includeFrom: false });
    ContentLoader.loadMultipleAfter(loadHomeContents().reverse(), 'primary-nav');
  },
  menu: () => {
    ContentLoader.removeFrom('primary-nav', 'footer', { includeFrom: false });
    ContentLoader.loadMultipleAfter(loadMenuContents().reverse(), 'primary-nav');
  },
  contact: () => {
    ContentLoader.removeFrom('primary-nav', 'footer', { includeFrom: false });
  },
}), 'primary-header', 'primary-nav');

ContentLoader.loadMultipleAfter(loadHomeContents().reverse(), 'primary-nav');
