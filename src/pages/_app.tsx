import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
