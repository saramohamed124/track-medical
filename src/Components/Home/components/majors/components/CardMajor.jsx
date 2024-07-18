import brain_icon from '../assets/icons/brain.svg'
import earnose_icon from '../assets/icons/nose_ear.svg'
import soul_icon from '../assets/icons/soul.svg'
import teeth_icon from '../assets/icons/teeth.svg'
function CardMajor() {
    return ( 
        <div  className='cards-flex '>
            
            <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={teeth_icon}
                    alt="teeth" />
                    <h2 className="heading-major-card">الأسنان</h2>
            </div>
            <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={earnose_icon}
                    alt="earnose" />
                    <h2 className="heading-major-card">الأنف والأذن</h2>
            </div>
            <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={soul_icon}
                    alt="soul" />
                    <h2 className="heading-major-card">الطب النفسي</h2>
            </div>
            <div className="card-major">
                    <img
                    className='w-[100px] max-h-[80px]'
                    src={brain_icon}
                    alt="brain" />
                    <h2 className="heading-major-card">المخ والأعصاب</h2>
            </div>
        </div>
     );
}

export default CardMajor;