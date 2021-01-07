import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="container min-vh-100">
          {/* <h1>Home Page</h1> */}

          <div className="panel-container">

            <div className="row panel mt-5 shadow rounded" id="panel1">
              <img
                className="p-5 col-lg-5 col-md-12 col-sm-12"
                // style={{ height: '40vh', width: '28vw' }}
                src={`${process.env.PUBLIC_URL}/beverage1.png`}
                alt="Εικόνα ροφήματος"
              />
              <div className="col-lg-7 col-md-12 col-sm-12 align-self-center pr-lg-5 p-md-5 p-sm-5 p-5">
                <h3 className="text-white">Test</h3>
                <p className="text-white mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci tenetur velit officiis perspiciatis accusamus voluptas magnam modi iure cum a, voluptatum, alias vero ad in aspernatur dicta. Tenetur, sed!
                  Deleniti consequatur aliquid.
                </p>
                <button className="btn btn-outline-light float-right">TestButton</button>
              </div>

            </div>

            <div className="row panel mt-5 mb-lg-0 mb-5 rounded shadow" id="panel2">
              <div className="col-lg-7 col-md-12 col-sm-12 align-self-center pl-lg-5 p-md-5 p-sm-5 p-5">
                <h3 className="text-white">Test</h3>
                <p className="text-white mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci tenetur velit officiis perspiciatis accusamus voluptas magnam modi iure cum a, voluptatum, alias vero ad in aspernatur dicta. Tenetur, sed!
                  Deleniti consequatur aliquid.
                </p>
                <button className="btn btn-outline-light">TestButton</button>
              </div>


              <img
                className="p-5 col-lg-5 col-md-12 col-sm-12"
                // style={{ height: '40vh', width: '30vw' }}
                src={`${process.env.PUBLIC_URL}/pistachio.png`}
                alt="Εικόνα ροφήματος"
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;