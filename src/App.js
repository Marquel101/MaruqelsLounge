import './App.css';
import Splash from './screens/Splash/Splash';
import About from './screens/About/About';
import Layout from './components/Layout/Layout';
import Projects from './screens/Projects/Projects';
import Contact from './screens/Contact/Contact';
function App() {
  return (
    <div className="App">
        <Layout>
          <Splash/>
          <About />
          <Projects />
          <Contact />
        </Layout>
    </div>
  );
}

export default App;
