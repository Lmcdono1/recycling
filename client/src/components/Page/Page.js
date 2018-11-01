//import React 
import React, { Component } from 'react';
//import wrapper section
import Wrapper from "../Wrapper";
// //import cards section
import Cards from "../Cards";
// //import container section
// import Map from "../Map";
// //import facts section
import Facts from "../Facts";
//import footer section
import Footer from "../Footer";
import Form from "../Form";

// import './Page.css';

class Page extends Component {



  render() {
    return (
      <div>
        <Wrapper />
        <Cards />
        <Facts />
        {/* <Map /> */}
        <Form />
        <Footer />
      </div>
    );
  }
}



export default Page;