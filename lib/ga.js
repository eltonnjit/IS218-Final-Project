import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-ZQZ178BBY1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};