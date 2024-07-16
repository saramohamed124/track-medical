import Content from "./components/Content";
import ImgHospital from "./components/ImgHosipital";

function Header() {
    return ( 
    <div className="bg-[--main-color-green] flex flex-col-reverse md:flex-row m-0 ">
        <Content/>
        <ImgHospital/>
    </div>
    );
}

export default Header;