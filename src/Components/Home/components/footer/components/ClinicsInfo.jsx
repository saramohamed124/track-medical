function ClinicsInfo() {
    return ( 
        <div className="text-center hidden md:block">
            <p className="avenir-heavy text-white text-xl my-3">العيادات الخارجية</p>
            <div className="grid grid-cols-2 avenir-book text-white">
            <ul className="flex justify-start items-center gap-3 flex-col text-sm">
                <li>الطب الباطني</li>
                <li>العيون</li>
            </ul>
            <ul className="flex-box-center gap-3 flex-col text-sm">
            <li>جراحة القلب</li>
            <li>نساء و الولادة</li>
            <li>المخ والاعصاب</li>
            </ul>
            </div>
        </div>
     );
}

export default ClinicsInfo;