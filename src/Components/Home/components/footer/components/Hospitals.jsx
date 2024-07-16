function Hospitals() {
    return ( 
        <div className="text-center hidden md:block">
            <p className="avenir-heavy text-white text-xl my-3">المستشفيات</p>
            <div className="grid grid-cols-2 avenir-book text-white">
            <ul className="flex justify-start items-center gap-3 flex-col w-fit">
                <li>مستشفيات مكة المكرمة</li>
                <li>مستشفيات المدينة المنورة</li>
            </ul>
            <ul className="flex justify-center items-center gap-3 flex-col">
            <li>مستشفيات الرياض</li>
            <li>مستشفيات جدة</li>
            <li>مستشفيات الدمام</li>
            </ul>
            </div>
        </div>
     );
}

export default Hospitals;