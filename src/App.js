import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

const router = createBrowserRouter(ROUTES);

function App() {
  
//   useEffect(() => {
//     const handleKeyboardShortcut = (e) => {
//         if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || e.keyCode === 123) {
//             e.preventDefault();
//         }
//     };

//     document.addEventListener('keydown', handleKeyboardShortcut);
//     return () => document.removeEventListener('keydown', handleKeyboardShortcut);
// }, []);

//   useEffect(() => {
//     const preventRightClick = (e) => {
//         e.preventDefault();
//     };

//     document.addEventListener('contextmenu', preventRightClick);
    
//     return () => {
//         document.removeEventListener('contextmenu', preventRightClick);
//     };
// }, []);
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
