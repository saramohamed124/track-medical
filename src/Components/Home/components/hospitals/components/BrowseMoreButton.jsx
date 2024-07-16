import { Link } from "react-router-dom";

function BrowseMoreButtton(props) {
    return ( 
        <>
        <button className="btn rounded-3xl text-white bg-[--main-color-green] avenir-heavy"><Link to={props.link}>تصفح المزيد</Link></button>
        </>
     );
}

export default BrowseMoreButtton;