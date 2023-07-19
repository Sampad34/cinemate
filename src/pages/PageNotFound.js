import { Link } from "react-router-dom";
import  PageNotFoundImage from "../assets/pagenotfoundimage.png";
import { Button } from "../components";
import { useEffect } from "react";
//import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found/ Cinemate`;
  })

   //const pageTitle =useTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-2">
       <p className="text-5xl text-gray-700 font-bold my-2 dark:text-white">404, Oops error! </p>
       <div className="max-w-md">
       <img className="rounded" src={PageNotFoundImage} alt="404 page not found" />
      </div>
      </div>
      <div className="flex justify-center my-1">
        <Link to="/">
        <Button children="Back to Cinemate"/>
        
        </Link>
      </div>
      </section>
    </main>
  )
}
