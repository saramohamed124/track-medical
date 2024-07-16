import facebook_icon from '../assets/icons/facebook.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'
import youtube_icon from '../assets/icons/youtube.svg'
import instagram_icon from '../assets/icons/instagram.svg'

function Socials() {
    return ( 
        <ul className='grid grid-cols-4 gap-3 w-fit items-center justify-start m-auto'>
            <li><a href="facebook.com"><img className='w-[20px]' src={facebook_icon} alt='facebook_icon'></img></a></li>
            <li><a href="linkedin.com"><img className='w-[20px]' src={linkedin_icon} alt='linkedin_icon'></img></a></li>
            <li><a href="youtube.com"><img className='w-[20px]' src={youtube_icon} alt='youtube_icon'></img></a></li>
            <li><a href="instagram.com"><img className='w-[20px]' src={instagram_icon} alt='instagram_icon'></img></a></li>
        </ul>
     );
}

export default Socials;