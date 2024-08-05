import { Link } from "react-router-dom";

function BrowseMoreButtton(props) {
    return ( 
        <>
        <button className="browse-btn-more transition-all duration-700 hover:bg-[--main-color-green-dark] border-none"><Link to={props.link}>تصفح المزيد</Link></button>
        </>
     );
}

export default BrowseMoreButtton;