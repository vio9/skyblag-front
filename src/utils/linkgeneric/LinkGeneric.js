import { Link } from "react-router-dom";
import './link-generic.scss';

function LinkGeneric({adress, text, color}){


    return(
        <Link className="link-generic-text"
         to={adress}
         style={{color: color}}
         >
            {text}
        </Link>
    )
}

export default LinkGeneric;