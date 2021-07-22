import "../styles/globals.css";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { store } from "../app/store";
import { client } from "./api/apollo";

import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
