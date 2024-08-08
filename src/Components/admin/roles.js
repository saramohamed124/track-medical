import home_icon from './assets/icons/home.svg';
import request_icon from './assets/icons/request.svg';
import ads_icon from './assets/icons/ads.svg';
import blog_icon from './assets/icons/blog.svg';
import store_icon from './assets/icons/store.svg';
import team_icon from './assets/icons/team.svg';
import hospitals_icon from './assets/icons/hospitals.svg';
import companies_icon from './assets/icons/company.svg';
import folder_icon from './assets/icons/folder.svg';

export const roles = [
    {
      type: 'Track Super Admin',
      links: [
        { name: 'لوحة التحكم', src: home_icon, link: '/admin/dashboard/' },
        { name: 'طلبات', src: request_icon, link: '/admin/dashboard/request' },
        { name: 'إعلانات', src: ads_icon, link: '/admin/dashboard/ads' },
        { name: 'مدونة', src: blog_icon, link: '/admin/dashboard/' },
        { name: 'المتجر', src: store_icon, link: '' },
        { name: 'الفريق', src: team_icon, link: '/admin/dashboard/team-admin' },
        { name: 'المستشفيات', src: hospitals_icon, link: '/admin/dashboard/hospitals' },
        { name: 'الشركات', src: companies_icon, link: '/admin/dashboard/companies' }
      ]
    },
    {
      type: 'Client Admin',
      links: [
        { name: 'لوحة التحكم', src: home_icon, link: '/admin/dashboard/' },
        { name: 'الملف', src: folder_icon, link: '/admin/dashboard/hospital-info-admin' }
      ]
    }
  ];