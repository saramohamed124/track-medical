import Header from "../Components/Home/components/Header/Header";
import Majors from "../Components/Home/components/majors/Majors";
import Search from "../Components/Home/components/Search/Search";

function Home() {
    return ( 
        <div >
            <Header/>
            <div className="container">
                <Search/>
                <Majors/>
            </div>
        </div>
     );
}

export default Home;