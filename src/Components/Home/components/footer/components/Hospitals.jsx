function Hospitals() {
    return ( 
        <div className="text-center hidden md:block">
            <p className="avenir-heavy text-white text-xl my-3">المستشفيات</p>
            <div className="grid grid-cols-2 avenir-book text-white gap-12">
            <ul className="flex justify-start items-center gap-3 flex-col w-full text-sm">
                <li className="whitespace-nowrap">مستشفيات مكة المكرمة</li>
                <li className="whitespace-nowrap">مستشفيات المدينة المنورة</li>
            </ul>
            <ul className="flex-box-center gap-3 flex-col w-full text-sm">
            <li className="whitespace-nowrap">مستشفيات الرياض</li>
            <li className="whitespace-nowrap">مستشفيات جدة</li>
            <li className="whitespace-nowrap">مستشفيات الدمام</li>
            </ul>
            </div>
        </div>
     );
}

export default Hospitals;