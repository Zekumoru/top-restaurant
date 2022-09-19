import ContentLoader from './scripts/ContentLoader';
import loadPrimaryHeader from './scripts/loadPrimaryHeader';
import loadPrimaryNav from './scripts/loadPrimaryNav';
import loadFooter from './scripts/loadFooter';
import loadHomeContents from './scripts/loadHomeContents';
import './styles.css';

ContentLoader.loadFirst(loadPrimaryHeader(), 'primary-header');
ContentLoader.loadAfter(loadPrimaryNav(), 'primary-header', 'primary-nav');
ContentLoader.load(loadFooter(), 'footer')

ContentLoader.loadMultipleAfter(loadHomeContents().reverse(), 'primary-nav');