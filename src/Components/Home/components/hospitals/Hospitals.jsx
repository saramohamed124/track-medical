import BrowseMoreButtton from "./components/BrowseMoreButton";
import Cards from "./components/Cards";

function Hospitals() {
    return ( 
        <div className="my-5">
            <div className="flex-between-center mb-[50px]">
                <h1 className="text-3xl text-black">تصفح المستشفيات حسب المدينة</h1>
                <BrowseMoreButtton link={'/'}/>
            </div>
            <Cards/>
        </div>
     );
}

export default Hospitals;