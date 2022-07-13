import React from "react";
import App from "./App";
import { GlobalStyle } from './global/globalStyle';
import GithubProvider from "./provider/githubProvider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;