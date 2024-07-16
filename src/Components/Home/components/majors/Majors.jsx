import BrowseMoreButtton from "../hospitals/components/BrowseMoreButton";
import CardMajor from "./components/CardMajor";

function Majors() {
    return ( 
        <div className="parent-cards-flex">
                <h1 className="heading-cards-flex">تصفح المستشفيات حسب التخصصات</h1>
                <BrowseMoreButtton link={'/'}/>
            <CardMajor/>
        </div>
     );
}

export default Majors;