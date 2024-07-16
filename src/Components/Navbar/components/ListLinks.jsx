import { Link } from "react-router-dom";
import SignList from "./SignList";

function ListLinks() {
    return ( 
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content left-0 bg-base-100 avenir-heavy z-[1] mt-3 p-5 shadow flex items-center gap-6 w-[300px] rounded-none border">
            <Link className="text-black">المستشفيات</Link>
            <Link className="text-black">العيادات الخارجية</Link>
            <Link className="text-black">العروض والتخفيضات</Link>
            <Link className="text-black">مدونتنا الصحية</Link>
            <Link className="text-black">من نحن</Link>
            <hr className="w-[60px] h-[5px] bg-[--main-color-orange] rounded-[4px]"/>
            <SignList/>
      </ul>
     );
}

export default ListLinks;