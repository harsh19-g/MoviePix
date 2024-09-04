import { NavLink, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <section className="error-section" style={{display:"flex", flexDirection: "column",alignItems:"center", justifyContent:"center"}}>
        <div className="error-text" >
          <figure>
            <img src="../../public/images/404.jpg" alt="error 404 page" style={{width:400}} />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" style={{marginTop:20}}>Go back to Homepage</NavLink>
      </section>
    );
  }
  return <h1>The page you are looking doesn't exist</h1>
};
