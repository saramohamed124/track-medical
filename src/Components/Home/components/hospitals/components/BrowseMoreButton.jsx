import { Link } from "react-router-dom";

function BrowseMoreButtton(props) {
    return ( 
        <>
        <button className="browse-btn-more"><Link to={props.link}>تصفح المزيد</Link></button>
        </>
     );
}

export default BrowseMoreButtton;