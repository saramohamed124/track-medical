import { Link} from "react-router-dom";
import search_icon from '../assets/icons/search_icon.svg';
import map_icon from '../assets/icons/map_icon.svg';

function Tabs() {
  return (
    <>
      <ul className="avenir-heavy text-black w-fit flex-between-center gap-4 mt-7 mb-4 mr-5">
        <li className="bg-[--main-color-orange-dark] flex-between-center gap-3 p-3 rounded-3xl">
          <Link to="/hospitals" className="flex-between-center gap-3 ">
            بحث
            <img src={search_icon} alt="search_icon" />
          </Link>
        </li>
        <li className="bg-[--main-color-orange] flex-between-center gap-3 p-3 rounded-3xl transition-all duration-700 hover:bg-[--main-color-orange-dark]">
          <Link to="/maps" className="flex-between-center gap-3 ">
            خرائط
            <img src={map_icon} alt="map_icon" />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Tabs;
