import { Link} from "react-router-dom";
import search_icon from '../assets/icons/search_icon.svg';
import map_icon from '../assets/icons/map_icon.svg';

function Tabs() {
  return (
    <>
      <ul className="search-tabs">
        <li className="bg-[--main-color-orange-dark] search-tab hospital-search">
          <Link to="/hospitals" className="link-search-tab">
            بحث
            <img src={search_icon} alt="search_icon" />
          </Link>
        </li>
        <li className="bg-[--main-color-orange] search-tab maps-search">
          <Link to="/maps" className="link-search-tab">
            خرائط
            <img src={map_icon} alt="map_icon" />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Tabs;
