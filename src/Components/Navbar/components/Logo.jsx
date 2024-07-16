import { Link } from 'react-router-dom';
import logo_green from '../assets/img/logo_green.png'

export function Logo() {
  return (
    <div className='flex-between-center gap-4'>
      <Link to={'/'} className='text-[--main-color-green] font-bold text-3xl'>تراك</Link>
      <Link to={'/'}>
      <img className='max-w-[5rem]' src={logo_green} alt='logo-green'/>
      </Link>
    </div>
  );
};