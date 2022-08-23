import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/section/Home';
import Contact from './components/section/Contact';
import { forwardRef, useRef } from 'react';
import Language from './components/navbar/Language';
import Timeline from './components/section/Timeline';

const App = () => {

  return (
    <div className="App">
      <div className='d-md-flex'>
        <div className='col-md-3 h-100 sticky-top justify-content-between'>
          <Navbar />
        </div>
        <div className='col-12 col-md-9'>
          <div className=''>
            <Home id='home' />
            <Timeline id='timeline' />
            <Contact id='contact' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
