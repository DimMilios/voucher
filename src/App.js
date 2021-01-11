import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import PdfViewerPage from "./pages/PdfViewerPage";

import ApplicationFormPage from "./pages/ApplicationFormPage";
import ReviewPage from "./pages/ReviewPage";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";
import VoucherPage from "./pages/VoucherPage";
import AppResultPage from "./pages/AppResultPage";
import PdfViewerPage from "./pages/PdfViewerPage";
import AdminPage from "./pages/AdminPage";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/app-form">
          <ApplicationFormPage />
        </Route>
        <Route path="/app-review/:amka">
          <ReviewPage />
        </Route>
        <Route path="/app-results/:key">
          <ResultPage />
        </Route>
        <Route path="/activate">
          <VoucherPage />
        </Route>
        <Route path="/coupon-pdf">
          <PdfViewerPage />
        </Route>

        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route path="/admin/applications">
          <AppResultPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      {/* <PdfViewerPage /> */}
    </Router >
  );
}

export default App;