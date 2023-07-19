import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600 md:bg-opacity-50 dark:bg-opacity-50">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link> All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="www.instagram.com" target="_blank"  rel="noreferrer" className="mr-4 hover:underline md:mr-6">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/sampadrb-447435a4/" target="_blank"  rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://www.youtube.com/" target="_blank"  rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://github.com/Sampad34" target="_blank"  rel="noreferrer" className="hover:underline">Github</a>
        </li>
    </ul>
</footer>




    
  )
}
