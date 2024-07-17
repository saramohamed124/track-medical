import Deals from "../Components/Home/components/deals/Deals";
import Header from "../Components/Home/components/header/Header";
import Hospitals from "../Components/Home/components/hospitals/Hospitals";
import Majors from "../Components/Home/components/majors/Majors";
import Search from "../Components/Home/components/search/Search";

function Home() {
    return ( 
        <div >
            <Header/>
            <div className="container">
                <Search/>
                <Hospitals/>
                <Majors/>
                <Deals/>
            </div>
            
        </div>
     );
}

export default Home;