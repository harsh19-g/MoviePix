import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getAPIData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetail";
import { getMovieDetail } from "./api/GetMovieDetail";

const App = ()=>{
  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout/>,
      errorElement : <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
         },
         {
          path: "/about",
          element: <About/>,
         },
         {
          path: "/movie",
          element: <Movie/>,
          loader : getAPIData,
         },
         //Dynamic Routing
         {
          path: "/movie/:movieID",
          element: <MovieDetails/>,
          loader: getMovieDetail,
         },
         {
          path: "/contact",
          element: <Contact/>,
          action: contactData,
         },
        //  {
        //   path: "*",
        //   element: <NotFound/>
        //  }
      ]
    },

  ]);
  return <RouterProvider router={router}/>
}
export default App;