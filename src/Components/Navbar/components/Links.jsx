import { Link } from "react-router-dom";
import Account from "./Account";
function Links() {
    return ( 
        <div className=" hidden min-[992px]:flex justify-between items-center flex-row-reverse gap-[3rem] text-black avenir-heavy">
            <Account/>
            <Link className="relative navlinks">من نحن</Link>
            <Link className="relative navlinks">مدونتنا الصحية</Link>
            <Link className="relative navlinks">العروض والتخفيضات</Link>
            <Link className="relative navlinks">العيادات الخارجية</Link>
            <Link to={'/hospitals'} className="relative navlinks">المستشفيات</Link>
        </div>
     );
}

export default Links;