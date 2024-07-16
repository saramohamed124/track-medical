import BrowseMoreButtton from "../hospitals/components/BrowseMoreButton";
import CardDeals from "./components/CardDeals";

function Deals() {
    return ( 
        <div className="my-[5rem]">
        <div className="flex-between-center mb-[50px]">
            <h1 className="text-3xl text-black">تصفح المستشفيات حسب التخصصات</h1>
            <BrowseMoreButtton link={'/'}/>
        </div>
        <CardDeals/>
    </div>
     );
}

export default Deals;