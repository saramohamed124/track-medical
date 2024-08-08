import React from 'react';

export default function FilterCart() {
  return (
    <div>
       <select className="select select-bordered avenir-book bg-white text-gray-500 text-sm max-w-[100px]">
        <option className="text-sm" value="هذا الشهر">هذا الشهر</option>
        <option className="text-sm" value="هذا الأسبوع">هذا الأسبوع</option>
       </select>
    </div>
  );
}
