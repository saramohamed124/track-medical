import dammam_img from '../assets/imgs/dammam.webp'
import gadah_img from '../assets/imgs/gadah.jpg'
import madina_img from '../assets/imgs/madina.jpg'
import mekka_img from '../assets/imgs/mekka.jpg'
import riyadh_img from '../assets/imgs/riyadh.jpg'

function Cards() {
    return ( 
        <div className='my-4 flex-between-center gap-y-5 gap-x-5 w-full flex-wrap'>
           
           <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div> <div className="card card-compact bg-base-100 w-[215px] shadow-xl">
            <figure >
                <img
                className='h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black ">الدمام</h2>
            </div>
            </div>
            </div>
     );
}

export default Cards;