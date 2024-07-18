import FormSigninMembers from "../Components/Sign/signin/components/members/components/FormSigninMembers";
import { SideOptions } from "../Components/Sign/signin/components/SideOptions";

function SigninMember() {
    return ( 
        <div className='flex flex-col md:flex-row h-screen'>
          <FormSigninMembers/>
        <SideOptions/>
      </div>
     );
}

export default SigninMember;