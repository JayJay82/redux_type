import React from 'react';
import  Home from './home';
import './App.css';
import { MasterPage } from './layout/masterpage';
import { Navigation } from './layout/navigation';

const App: React.FC = () => {
  return (
    <div className="container h-100">
      <MasterPage>
       <Navigation />
      </MasterPage>
    </div>
  );
}

export default App;
