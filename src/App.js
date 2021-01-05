import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import PdfViewerPage from "./pages/PdfViewerPage";

import ApplicationFormPage from "./pages/ApplicationFormPage";
import ReviewPage from "./pages/ReviewPage";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";
import VoucherPage from "./pages/VoucherPage";


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/app-form">
          <ApplicationFormPage />
        </Route>
        <Route path="/app-review">
          <ReviewPage />
        </Route>
        <Route path="/app-results">
          <ResultPage />
        </Route>
        <Route path="/activate">
          <VoucherPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      {/* <PdfViewerPage /> */}
    </Router>
  );
}

export default App;