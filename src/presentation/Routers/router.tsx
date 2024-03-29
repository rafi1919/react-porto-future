import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../UI/Layout/layout.main';
import Home from '../Home/HomePage';

const App =()=> {


    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />}>

                </Route>
                </Route>
            </Routes>
        </Router>
    )
};
export default App