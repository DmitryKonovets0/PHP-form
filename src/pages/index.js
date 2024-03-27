import * as React from "react";
import '../styles/global.scss';
import Email from "./components/email";

const IndexPage = () => {
  return (
      <Email />
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
