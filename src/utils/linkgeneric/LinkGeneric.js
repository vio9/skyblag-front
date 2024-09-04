import { Link } from "react-router-dom";
import './link-generic.scss';

function LinkGeneric({adress, text}){
    return(
        <Link className='link-generic-text' to={adress}>{text}</Link>
    )
}

export default LinkGeneric;