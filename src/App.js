import './App.css';
import Profile from './Component/Profile';
import MediaPlan from './Component/MediaPlan';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter>
    <Routes>
        <Route index  element={<Profile/>} />
        <Route exact path='/media' element={<MediaPlan/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
