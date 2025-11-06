import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
export const footerLinks = [{
  title: 'Company',
  items: [{
    name: 'About us',
    link: '/pages/about/about-us'
  }, {
    name: 'Contact us',
    link: '/help/contact-us'
  },{
    name: 'Career',
    link: '/pages/career'
  }]
}];
export const footerLinks2 = [{
  name: 'About',
  link: '/pages/about/about-us'
}, {
  name: 'Terms',
  link: '/pages/terms'
}, {
  name: 'Privacy',
  link: '/pages/privacy-policy'
}, {
  name: 'Career',
  link: '/pages/career'
}, {
  name: 'Contact us',
  link: '/help/contact-us'
}, {
  name: 'Cookies',
  link: '/pages/cookie-policy'
}];
export const socialMediaLinks = [{
  icon: FaFacebookF,
  variant: 'text-facebook'
}, {
  icon: FaInstagram,
  variant: 'text-instagram'
}, {
  icon: FaTwitter,
  variant: 'text-twitter'
}, {
  icon: FaLinkedinIn,
  variant: 'text-linkedin'
}];
