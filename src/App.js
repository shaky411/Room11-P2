import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
// import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/room11-p2">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;






// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Header />
//         {/* Wrap Route elements in a Routes component */}
//         <Routes basename="/room11-p2">
//           {/* Define routes using the Route component to render different page components at different paths */}
//           {/* Define a default route that will render the Home component */}
//           <Route path="/room11-p2/" element={<Home />} />
//           <Route path="/room11-p2/about" element={<About />} />
//           {/* <Route path="/react-portfolio-new/projects" element={<Projects />} /> */}
//           {/* <Route path="/react-portfolio-new/gallery" element={<Gallery />} /> */}
//           {/* Define a route that will have descendant routes */}
//           <Route path="/room11-p2/contact/*" element={<Contact />} />
//         </Routes>
//       </div>
//       <Footer></Footer>
//     </Router>
    
//   );
// }

// export default App;
