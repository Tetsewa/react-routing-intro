import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePageWithNavigate from "./pages/HomePageWithNavigate"
import projectsData from "./projects-data.json";
import ProjectDetailsPage from './pages/ProjectDetailsPage';

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        <Route 
          path="/projects/:projectId"
          element={<ProjectDetailsPage projects={projectsData} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
