import brain_icon from '../assets/icons/brain.svg'
import earnose_icon from '../assets/icons/nose_ear.svg'
import soul_icon from '../assets/icons/soul.svg'
import teeth_icon from '../assets/icons/teeth.svg'
function CardMajor() {
    return ( 
        <div className="my-4 flex justify-center items-center gap-10 w-full flex-wrap ">
            
            <div className="bg-base-100 w-[190px] h-[185px] py-5 px-[20px] flex justify-center items-center gap-5 flex-col box-majors-shadow rounded-[50%]">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={teeth_icon}
                    alt="teeth" />
                    <h2 className="w-[8rem] rounded-3xl text-white bg-[--main-color-green] p-2 avenir-heavy flex justify-center items-center gap-4 text-md  mx-4">الأسنان</h2>
            </div>
            <div className="bg-base-100 w-[190px] h-[185px] py-5 px-[20px] flex justify-center items-center gap-5 flex-col box-majors-shadow rounded-[50%]">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={earnose_icon}
                    alt="earnose" />
                    <h2 className="w-[8rem] rounded-3xl text-white bg-[--main-color-green] p-2 avenir-heavy flex justify-center items-center gap-4 text-md  mx-4">الأنف والأذن</h2>
            </div>
            <div className="bg-base-100 w-[190px] h-[185px] py-5 px-[20px] flex justify-center items-center gap-5 flex-col box-majors-shadow rounded-[50%]">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={soul_icon}
                    alt="soul" />
                    <h2 className="w-[8rem] rounded-3xl text-white bg-[--main-color-green] p-2 avenir-heavy flex justify-center items-center gap-4 text-md  mx-4">الطب النفسي</h2>
            </div>
            <div className="bg-base-100 w-[190px] h-[185px] py-5 px-[20px] flex justify-center items-center gap-5 flex-col box-majors-shadow rounded-[50%]">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={brain_icon}
                    alt="brain" />
                    <h2 className="w-[8rem] rounded-3xl text-white bg-[--main-color-green] p-2 avenir-heavy flex justify-center items-center gap-4 text-md  mx-4">المخ والأعصاب</h2>
            </div>
        </div>
     );
}

export default CardMajor;