import * as React from 'react';
import Search from '../Components/Home/components/search/Search';

export const MapsSearch = () => {
    return (
        <div>
        <Search/>
        <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3414861987!2d47.48202486752016!3d24.72374984734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0455e175c5e1%3A0xfa7d1c7f096df805!2z2KfZhNmF2KrYrdmBINin2YTZiNi32YbZig!5e0!3m2!1sar!2seg!4v1721250153348!5m2!1sar!2seg" width="600" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};