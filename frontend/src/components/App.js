import logo from '../logo.svg';
import './App.css';

import Header from './Header';
//import AppContent from './AppContent';

function App() {
  return (
    <div >
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;