// // App.js
// import './App.css';
// import Header from './Components/Header'; 
// import { RouterProvider } from 'react-router-dom';
// import { appRouter } from './Components/Layout'; 
// function App() {
//   return (
//     <div>
//       <Header /> 
//       <RouterProvider router={appRouter} /> 
//     </div>
//   );
// }

// export default App;

// import './App.css';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home'; 
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Error from './Components/Error';

// Define routes
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  // Wrapping layout with Header and Outlet
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/signup', element: <SignUp /> },
        ],
        errorElement: <Error />,  // Error boundary
    },
]);

function App() {
    return (
        <RouterProvider router={appRouter} />  // Providing the router to the app
    );
}

export default App;