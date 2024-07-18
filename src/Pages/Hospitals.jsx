import Header from "../Components/Home/components/header/Header";
import Search from "../Components/Home/components/search/Search";
import CardGrid from "../Components/hospitals/components/CardGrid";

function Hospitals() {
    return ( 
        <div>
            <Header/>
            <div className="container">
            <Search/>
            <CardGrid/>
            </div>
        </div>
     );
}

export default Hospitals;