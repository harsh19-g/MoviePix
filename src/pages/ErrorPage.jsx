import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = ()=>{
    navigate(-1);
    // navigate("/");
  }
  if (error.status === 404) {
    return (
      <section className="error-section" style={{display:"flex", flexDirection: "column",alignItems:"center", justifyContent:"center"}}>
        <div className="error-text" >
          <figure>
            <img src="../src/assets/images/404.png" alt="error 404 page" style={{width:400}} />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        {/* <NavLink to="/" style={{marginTop:20}}>Go back to Homepage</NavLink> */}
        <button className="btn" onClick={handleGoBack}>Go Back</button>
      </section>
    );
  }
  return <h1>The page you are looking doesn't exist</h1>
};
