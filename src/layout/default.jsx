import { Outlet, Link } from "react-router-dom";

function Defaultpage(){

    return (
        <>
         <nav>
            <Link to>home</Link>
            <Link>about us</Link>
            <Link to>contact us</Link>
         </nav>

         <Outlet/>
        </>
    );
}

export default Defaultpage;