import { Link } from "react-router-dom";
import SignList from "./SignList";

function ListLinks() {
    return ( 
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content z-50 bg-white avenir-heavy mt-3 p-5 shadow flex items-center gap-6 w-[300px] rounded-none border left-[-8px] top-[106%]">
            <Link to={'/hospitals'} className="text-black relative navlinks">المستشفيات</Link>
            <Link to={'/clinics-home'} className="text-black relative navlinks">العيادات الخارجية</Link>
            <Link to={'/deals-offers'} className="text-black relative navlinks">العروض والتخفيضات</Link>
            <Link className="text-black relative navlinks">مدونتنا الصحية</Link>
            <Link className="text-black relative navlinks">من نحن</Link>
            <hr className="w-[60px] h-[5px] bg-[--main-color-orange] rounded-[4px]"/>
            <SignList/>
      </ul>
     );
}

export default ListLinks;