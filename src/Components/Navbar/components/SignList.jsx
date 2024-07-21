import { Link } from "react-router-dom";
import signin_icon from '../assets/icons/singin.svg'
import signup_icon from '../assets/icons/signup.svg'
function SignList() {
    return ( 
        <ul className="avenir-heavy  text-black w-full lg:w-[230px] flex-between-center gap-5 lg:gap-1 flex-col text-5xl lg:text-[18px]">
            <li className=" w-full flex flex-row items-center justify-end gap-[2rem]">
                <Link className="relative navlinks" to={'/signin-hospitals'}>تسجيل دخول</Link>
                <img className="w-[75px] lg:w-[25%] h-[50px]" src={signin_icon} alt="singin_icon"/>
                </li>
            <hr className="w-full bg-black h-[1px]"/>
            <li className=" w-full flex flex-row items-center justify-end gap-[1rem]">
                <Link className="relative navlinks" to={'/signup-hospitals'}>إنشاء حساب جديد</Link>
                <img className="w-[75px] lg:w-[25%] h-[50px]" src={signup_icon} alt="signup_icon"/>
                </li>
        </ul>
    );
}

export default SignList;