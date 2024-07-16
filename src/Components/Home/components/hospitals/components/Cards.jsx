import dammam_img from '../assets/imgs/dammam.webp'
import gadah_img from '../assets/imgs/gadah.jpg'
import madina_img from '../assets/imgs/madina.jpg'
import mekka_img from '../assets/imgs/mekka.jpg'
import riyadh_img from '../assets/imgs/riyadh.jpg'

function Cards() {
    return ( 
        <div className='my-4 flex justify-center items-center gap-y-5 gap-x-5 w-full flex-wrap'>
            <div className="card card-compact bg-base-100 w-[215px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure >
                <img
                className='w-full h-[190px]'
                src={riyadh_img}
                alt="الرياض" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black flex justify-center items-center ">الرياض</h2>
            </div>
            </div>
            <div className="card card-compact bg-base-100 w-[215px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure >
                <img
                className='w-full h-[190px]'
                src={gadah_img}
                alt="جدة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black flex justify-center items-center ">جدة</h2>
            </div>
            </div>

            <div className="card card-compact bg-base-100 w-[215px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure >
                <img
                className='w-full h-[190px]'
                src={dammam_img}
                alt="الدمام" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black flex justify-center items-center ">الدمام</h2>
            </div>
            </div>
             
            <div className="card card-compact bg-base-100 w-[215px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure >
                <img
                className='w-full h-[190px]'
                src={mekka_img}
                alt="مكة المكرمة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black flex justify-center items-center ">مكة المكرمة</h2>
            </div>
            </div>
            <div className="card card-compact bg-base-100 w-[215px] shadow-xl rounded-tr-md rounded-tl-md">
            <figure >
                <img
                className='w-full h-[190px]'
                src={madina_img}
                alt="المدينة المنورة" />
            </figure>
            <div className="avenir-heavy w-full text-center card-body bg-[--main-color-orange] rounded-br-md rounded-bl-md">
                <h2 className="card-title text-black flex justify-center items-center ">المدينة المنورة</h2>
            </div>
            </div>
            </div>
     );
}

export default Cards;