import { Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Routes path="/" element={<Home />}></Routes>
      <Routes path="/tasks" element={<Tasks />}></Routes>
      <Routes path="/tasks/:id" element={<TaskDetails />}></Routes>
      <Routes path="/about" element={<About />}></Routes>
      <Routes path="*" element={<NotFound />}></Routes>
    </Routes>
    </>
  );
}

export default App