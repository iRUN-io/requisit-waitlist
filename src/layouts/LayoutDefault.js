import React from "react";
// import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";
import Loader from "../components/layout/Loader";

const LayoutDefault = ({ children }) => (
  <>
    <Loader />
    {/* <Header navPosition="right" className="reveal-from-bottom" /> */}
    <main className="site-content" style={{backgroundColor: "#000000", color: "white", height: '100%'}}>
      {children}
    
      <div className="container" style={{marginTop: '100px', marginBottom: '50px'}}>
      <p className="mb-0">© {new Date().getFullYear()} <a href="https://www.irunauto.com/" className="text-foot" style={{cursor: 'pointer', color: '#EBB12E'}}>iRUN Technology </a></p>
      </div>
    </main>
    
    <footer style={{position: 'relative',
   top: 100, backgroundColor: "#000000", color: "white"}}>

      <div className="container text-center" style={{backgroundColor: "#000000", color: "white"}}>
        {/* <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="text-sm-start">
            <p className="mb-0">© {new Date().getFullYear()} <a href="https://www.irunauto.com/" className="text-foot" style={{cursor: 'pointer'}}>iRUN Technology </a></p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
    {/* <Footer /> */}
  </>
);

export default LayoutDefault;
