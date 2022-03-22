import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../component/journal/JournalScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* router ; path/auth componentn authrouter */}
          <Route to="/auth" component={AuthRouter}>
            
          </Route>
          <Route   exact path="/" component={JournalScreen}>
            
          </Route>
          {/* main route  path='/' Journalscreen*/}
        </Switch>
      </div>
    </Router>
  );
};
