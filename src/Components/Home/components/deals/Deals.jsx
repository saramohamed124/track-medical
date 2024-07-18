import BrowseMoreButtton from "../hospitals/components/BrowseMoreButton";
import CardDeals from "./components/CardDeals";

function Deals() {
    return ( 
        <div className="parent-cards-flex">
            <h1 className="heading-cards-flex">تصفح المستشفيات حسب العروض</h1>
            <BrowseMoreButtton link={'/'}/>
        <CardDeals/>
    </div>
     );
}

export default Deals;