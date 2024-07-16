import Tabs from "./components/Tabs";
import FormSearch from "./components/FormSearch";

function Search() {
    return ( 
        <div className="w-fit flex flex-col  items-center md:items-start m-auto">
        <Tabs/>
        <FormSearch/>
        </div>
    );
}

export default Search;