import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certificates } from "./components/Certificates";
import { Posts } from "./components/Posts";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useGlobalMotion } from './hooks/useGlobalMotion';
import { getApiUrl } from './config/api';

function App() {
  useGlobalMotion();

  useEffect(() => {
    const visitKey = "__portfolio_visit_recorded__";

    if (window[visitKey]) {
      return;
    }

    window[visitKey] = true;

    const recordVisit = async () => {
      try {
        await fetch(getApiUrl("/api/visitors"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            path: window.location.pathname,
            source: document.referrer || "direct",
          }),
        });
      } catch (error) {
        console.error("Unable to record visitor:", error);
      }
    };

    recordVisit();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Posts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
