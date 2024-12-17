import LeftBar from './components/leftBar/LeftBar.jsx';
import Navbar from './components/navbar/navbar.jsx';
import RightBar from './components/rightBar/rightBar.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate,
} from 'react-router-dom';

function App() {

    const currentUser = true;

    const Layout = () => {
        return (
            <div>
                <Navbar/>
                <div style={{display:"flex"}}>
                    <LeftBar/>
                    <div style={{flex: 6}}>
                        <Outlet/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        );
    };

    const ProtectedRoute = ({children}) => {
        
        // in case user didn't log in
        if (!currentUser) {
            return <Navigate to="/login"/>
        }

        return children;
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/', 
                    element: <Home/>
                }, 
                {
                    path: '/profile/:id', 
                    element: <Profile/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;