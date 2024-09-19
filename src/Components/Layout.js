// // Layout.js
// import { createBrowserRouter, Outlet } from 'react-router-dom';
// import Home from './Home'; 
// import About from './About';
// import Contact from './Contact';
// import SignUp from './SignUp';


// const Layout = () => {
//   return (
//     <div>
//       <Outlet /> 
//     </div>
//   );
// };

// export const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, 
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/contact', element: <Contact /> },
//       { path: '/sign-up', element: <SignUp /> },
//     ],
//   },
// ]);

// export default Layout;


import { Outlet } from "react-router-dom";
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* This will render the children components based on the current route */}
        </div>
    );
};

export default Layout;
