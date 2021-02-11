import {wrapper} from '../store.ts';

const App = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App);