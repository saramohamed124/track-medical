import { Link } from "react-router-dom";
import Account from "./Account";
function Links() {
    return ( 
        <div className=" hidden min-[992px]:flex justify-between items-center flex-row-reverse gap-[3rem]">
            <Link>المستشفيات</Link>
            <Link>العيادات الخارجية</Link>
            <Link>العروض والتخفيضات</Link>
            <Link>مدونتنا الصحية</Link>
            <Link>من نحن</Link>
            <Account/>
        </div>
     );
}

export default Links;