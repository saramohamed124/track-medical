import BrowseMoreButtton from "./components/BrowseMoreButton";
import Cards from "./components/Cards";

function Hospitals() {
    return ( 
        <div className="parent-cards-flex">
                <h1 className="heading-cards-flex">تصفح المستشفيات حسب المدينة</h1>
                <BrowseMoreButtton link={'/'}/>
            <Cards/>
        </div>
     );
}


export default Hospitals;