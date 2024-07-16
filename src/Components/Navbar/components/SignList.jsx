import { Link } from "react-router-dom";
import signin_icon from '../assets/icons/singin.svg'
import signup_icon from '../assets/icons/signup.svg'
function SignList() {
    return ( 
        <ul className="text-black w-full flex-between-center gap-5 flex-col  text-5xl">
            <li className=" w-full flex flex-row items-center justify-start gap-[10px]"><img className="w-[75px] h-[50px]" src={signin_icon} alt="singin_icon"/><Link>تسجيل دخول</Link></li>
            <hr className="w-full bg-black h-[1px]"/>
            <li className=" w-full flex flex-row items-center justify-start gap-[10px]"><img className="w-[75px] h-[50px]" src={signup_icon} alt="signup_icon"/><Link>إنشاء حساب جديد</Link></li>
        </ul>
    );
}

export default SignList;