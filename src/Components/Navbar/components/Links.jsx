import { Link } from "react-router-dom";
import Account from "./Account";
function Links() {
    return ( 
        <div className=" hidden min-[992px]:flex justify-between items-center flex-row-reverse gap-[3rem]">
            <Account/>
            <Link>من نحن</Link>
            <Link>مدونتنا الصحية</Link>
            <Link>العروض والتخفيضات</Link>
            <Link>العيادات الخارجية</Link>
            <Link>المستشفيات</Link>
        </div>
     );
}

export default Links;