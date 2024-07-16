import logo_img from '../assets/imgs/logo_white.png'

function LogoFooter() {
    return ( 
        <div className='grid grid-cols-1 max-h-[200px] md:grid-rows-1 grid-rows-2 w-fit gap-3 items-center justify-center text-center content-start m-auto'>
            <img className='w-[100px]' src={logo_img} alt='logo_white'/>
            <span className='text-white font-bold text-2xl'>تراك</span>
            </div>
     );
}

export default LogoFooter;