import Loader from "../components/loader/Loader";
import {Show} from "../components/show/Show";

function HomePage(props) {
    return (
       <>
         <Show>
             <Show.When isTrue={true}>
                 <h1>Home Page</h1>
             </Show.When>
             <Show.Else>
                 <h1>HOME PAGE</h1>
             </Show.Else>
         </Show>
       </>
    );
}

export default HomePage;