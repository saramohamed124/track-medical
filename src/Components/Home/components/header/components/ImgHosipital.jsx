import hospital_img from '../../../assets/imgs/hospital.png'

function ImgHospital() {
    return ( 
        <div className='flex flex-[0.8]'>
            <img className='flex-[2] max-w-full'  src={hospital_img} alt="hospital_img" />
        </div>
     );
}

export default ImgHospital;