import ClinicsInfo from "./components/ClinicsInfo";
import Contacts from "./components/Contacts";
import Hospitals from "./components/Hospitals";
import LogoFooter from "./components/LogoFooter";
import Socials from "./components/Socials";

function Footer() {
    return ( 
        <div className='bg-[--main-color-green] p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <LogoFooter />
            <Hospitals />
            <ClinicsInfo />
            <Contacts />
            <Socials />
            </div>
    );
}

export default Footer;
