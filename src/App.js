import './App.css';
import Contact from './Components/Contact';
import Card from './Components/Card';
import About from './about';

function App() {
  return (
    <div className="App">
      
      <Contact></Contact>
      <Card></Card>
        
    </div>
  );
}

export default App;






// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Header />
//         {/* Wrap Route elements in a Routes component */}
//         <Routes basename="/react-portfolio-new">
//           {/* Define routes using the Route component to render different page components at different paths */}
//           {/* Define a default route that will render the Home component */}
//           <Route path="/react-portfolio-new/" element={<Home />} />
//           <Route path="/react-portfolio-new/about" element={<About />} />
//           <Route path="/react-portfolio-new/projects" element={<Projects />} />
//           <Route path="/react-portfolio-new/gallery" element={<Gallery />} />
//           {/* Define a route that will have descendant routes */}
//           <Route path="/react-portfolio-new/contact/*" element={<Contact />} />
//         </Routes>
//       </div>
//       <Footer></Footer>
//     </Router>
    
//   );
// }

// export default App;
