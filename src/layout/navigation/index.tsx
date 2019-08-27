import React from "react"
import Home from '../../home'
import { Route, BrowserRouter as Router, Link, match } from 'react-router-dom';

export const Navigation : React.FC = () => (
  <Router>
    <div>
        <Route exact path="/" component={Home} />
    </div>
  </Router>
)