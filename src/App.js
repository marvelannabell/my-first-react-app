
import './App.css';
import EventInfo from './components/EventInfo';
import Header from './components/Header';
import Nav from './components/Nav';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Nav />

      <Header />

      <div className="container">
        {/* <!-- Start: Desc --> */}
        <EventInfo />

        <Speakers />

      </div>

      {/* <!-- Start: Tickets --> */}
      <Tickets />
      {/* <!-- End: Tickets --> */}

      {/* <!-- Start: Schedule --> */}
      <Schedule />
      {/* <!-- End: Schedule --> */}

      {/* <!-- Start: Footer --> */}
     <Footer />
  

    </div>
  );
}

export default App;
