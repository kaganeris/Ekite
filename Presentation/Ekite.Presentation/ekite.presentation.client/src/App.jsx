import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import '../public/assets/css/bootstrap/bootstrap.min.css';
import './App.css';

function App() {



    return (

        <div>
            <Navbar />
            <Sidebar />

            <BrowserRouter>
                <Routes>
                    <Route path="/Profile" element={<Profile/>} />
                </Routes>
            </BrowserRouter>

            <Footer/>
        </div>
    );
}

export default App;