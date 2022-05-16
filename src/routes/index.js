import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item/> : <Signin />; 
};

const RoutesApp = () => {
  return (
      <BrowserRouter>
      <Fragment>
          <Routes>
              <Route exact path="/home" eLement={<Private Item={Home} />} />
              <Route path="/" eLemnt={<Signup />} />
              <Route exact path="/signup" eLement={<Signup/>} />
              <Route path="*" eLement={<Signin />} />
          </Routes>
      </Fragment>
      </BrowserRouter>
  );
}

export default RoutesApp;
