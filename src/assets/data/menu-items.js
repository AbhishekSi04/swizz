import { BsBasket, BsBasketFill, BsCardChecklist, BsCartCheck, BsCartCheckFill, BsCreditCard2Front, BsCreditCard2FrontFill, BsFileCheckFill, BsFileEarmarkPlusFill, BsFolderCheck, BsGear, BsGraphUp, BsGridFill, BsHouse, BsLock, BsPencilSquare, BsPeople, BsQuestionDiamond, BsStar, BsStarFill, BsTrash, BsUiChecksGrid, BsUiRadiosGrid, BsWallet2 } from 'react-icons/bs';
import { FaBasketballBall, FaChartBar, FaCog, FaEdit, FaFacebook, FaLinkedinIn, FaRegCommentDots, FaRegFileAlt, FaTrashAlt, FaUserCog } from 'react-icons/fa';
import { FaChartLine, FaUserGraduate, FaUserTie, FaWallet } from 'react-icons/fa6';
import clientUnitLogo1 from '@/assets/images/client/uni-logo-01.svg';
import clientUnitLogo2 from '@/assets/images/client/uni-logo-02.svg';
import clientUnitLogo3 from '@/assets/images/client/uni-logo-03.svg';
import clientUnitLogo4 from '@/assets/images/client/uni-logo-04.svg';
import { FcGoogle } from 'react-icons/fc';
export const CATEGORY_MENU_ITEMS = [{
  key: 'category',
  label: 'Courses',
  icon: BsUiRadiosGrid,
  children: [{
    key: 'data-science',
    label: 'Data Science',
    parentKey: 'category'
  }, {
    key: 'salesforce-crm',
    label: 'Salesforce CRM',
    parentKey: 'category',
    children: [{
      key: 'salesforce-admin',
      label: 'Salesforce Admin',
      parentKey: 'salesforce-crm'
    }, {
      key: 'salesforce-development',
      label: 'Salesforce Development',
      parentKey: 'salesforce-crm'
    }, {
      key: 'lwc',
      label: 'Lightning Web Components',
      parentKey: 'salesforce-crm'
    }]
  }, {
    key: 'java-fullstack',
    label: 'Java Fullstack Development',
    parentKey: 'category',
    children: [{
      key: 'core-java',
      label: 'Core Java',
      parentKey: 'java-fullstack'
    }, {
      key: 'advanced-java',
      label: 'Advanced Java (JDBC, Servlets & JSP)',
      parentKey: 'java-fullstack'
    }, {
      key: 'frameworks',
      label: 'Frameworks (Hibernate & Spring)',
      parentKey: 'java-fullstack'
    }]
  }, {
    key: 'devops',
    label: 'DevOps',
    parentKey: 'category',
    children: [{
      key: 'devops-course',
      label: 'DevOps',
      parentKey: 'devops'
    }, {
      key: 'aws',
      label: 'Amazon Web Services',
      parentKey: 'devops'
    }]
  }, {
    key: 'cybersecurity',
    label: 'Cybersecurity',
    parentKey: 'category'
  }, {
    key: 'networking',
    label: 'Networking',
    parentKey: 'category'
  }, {
    key: 'software-testing',
    label: 'Software Testing',
    parentKey: 'category',
    children: [{
      key: 'manual-testing',
      label: 'Manual Testing',
      parentKey: 'software-testing'
    }, {
      key: 'automation-testing',
      label: 'Automation Testing',
      parentKey: 'software-testing'
    }, {
      key: 'manual-and-automation',
      label: 'Manual and Automation',
      parentKey: 'software-testing'
    }]
  }]
}];
export const INSTRUCTOR_MENU_ITEMS = [{
  key: 'dashboard',
  label: 'Dashboard',
  icon: BsUiChecksGrid,
  url: '/instructor/dashboard',
  parentKey: 'instructor'
}, {
  key: 'courses',
  label: 'My Courses',
  icon: BsBasket,
  url: '/instructor/manage-course',
  parentKey: 'instructor'
}, {
  key: 'quiz',
  label: 'Quiz',
  icon: BsQuestionDiamond,
  url: '/instructor/quiz',
  parentKey: 'instructor'
}, {
  key: 'earnings',
  label: 'Earnings',
  icon: BsGraphUp,
  url: '/instructor/earning',
  parentKey: 'instructor'
}, {
  key: 'students',
  label: 'Students',
  icon: BsPeople,
  url: '/instructor/student-list',
  parentKey: 'instructor'
}, {
  key: 'orders',
  label: 'Orders',
  icon: BsFolderCheck,
  url: '/instructor/order',
  parentKey: 'instructor'
}, {
  key: 'reviews',
  label: 'Reviews',
  icon: BsStar,
  url: '/instructor/review',
  parentKey: 'instructor'
}, {
  key: 'profile',
  label: 'Edit Profile',
  icon: BsPencilSquare,
  url: '/instructor/edit-profile',
  parentKey: 'instructor'
}, {
  key: 'payout',
  label: 'Payout',
  icon: BsWallet2,
  url: '/instructor/payout',
  parentKey: 'instructor'
}, {
  key: 'setting',
  label: 'Setting',
  icon: BsGear,
  url: '/instructor/setting',
  parentKey: 'instructor'
}, {
  key: 'delete',
  label: 'Delete Profile',
  icon: BsTrash,
  url: '/instructor/delete-account',
  parentKey: 'instructor'
}];
export const STUDENT_MENU_ITEMS = [{
  key: 'dashboard',
  label: 'Dashboard',
  icon: BsUiChecksGrid,
  url: '/student/dashboard',
  parentKey: 'student'
}, {
  key: 'subscriptions',
  label: 'My Subscriptions',
  icon: BsCardChecklist,
  url: '/student/subscription',
  parentKey: 'student'
}, {
  key: 'courses',
  label: 'My Courses',
  icon: BsBasket,
  url: '/student/course-list',
  parentKey: 'student'
}, {
  key: 'resume',
  label: 'Course Resume',
  icon: FaRegFileAlt,
  url: '/student/course-resume',
  parentKey: 'student'
}, {
  key: 'quiz',
  label: 'Quiz',
  icon: BsQuestionDiamond,
  url: '/student/quiz',
  parentKey: 'student'
}, {
  key: 'paymentInfo',
  label: 'Payment Info',
  icon: BsCreditCard2Front,
  url: '/student/payment-info',
  parentKey: 'student'
}, {
  key: 'wishlist',
  label: 'Wishlist',
  icon: BsCartCheck,
  url: '/student/bookmark',
  parentKey: 'student'
}, {
  key: 'profile',
  label: 'Edit Profile',
  icon: BsPencilSquare,
  url: '/student/edit-profile',
  parentKey: 'student'
}, {
  key: 'setting',
  label: 'Setting',
  icon: BsGear,
  url: '/student/setting',
  parentKey: 'student'
}, {
  key: 'delete',
  label: 'Delete Profile',
  icon: BsTrash,
  url: '/student/delete-account',
  parentKey: 'student'
}
// {
//   key: 'level',
//   label: 'Dropdown level',
//   icon: BsLock,
//   url: '/student/dropdown-level',
//   parentKey: 'student',
// },
];
export const APP_MENU_ITEMS = [{
  key: 'services',
  label: 'Services',
  isTitle: true,
  children: [{
    key: 'class-room-training',
    label: 'Class Room Training',
    url: '/services/class-room-training',
    parentKey: 'services'
  }, {
    key: 'online-training',
    label: 'Online Training',
    url: '/services/online-training',
    parentKey: 'services'
  }, {
    key: 'internship-program',
    label: 'Internship Program',
    url: '/services/internship-program',
    parentKey: 'services'
  }, {
    key: 'placements',
    label: 'Placements',
    url: '/services/placements',
    parentKey: 'services'
  }]
}, {
  key: 'accounts',
  label: 'Accounts',
  isTitle: true,
  children: [{
    key: 'instructor',
    label: 'Instructor',
    icon: FaUserTie,
    parentKey: 'accounts',
    children: [{
      key: 'dashboard',
      label: 'Dashboard',
      icon: BsGridFill,
      url: '/instructor/dashboard',
      parentKey: 'instructor'
    }, {
      key: 'courses',
      label: 'Courses',
      icon: BsBasketFill,
      url: '/instructor/manage-course',
      parentKey: 'instructor'
    }, {
      key: 'createCourse',
      label: 'Create Course',
      icon: BsFileEarmarkPlusFill,
      url: '/instructor/create-course',
      parentKey: 'instructor'
    }, {
      key: 'addCourse',
      label: 'Course Added',
      icon: BsFileCheckFill,
      url: '/instructor/course-added',
      parentKey: 'instructor'
    }, {
      key: 'quiz',
      label: 'Quiz',
      icon: BsQuestionDiamond,
      url: '/instructor/quiz',
      parentKey: 'instructor'
    }, {
      key: 'earnings',
      label: 'Earnings',
      icon: FaChartLine,
      url: '/instructor/earning',
      parentKey: 'instructor'
    }, {
      key: 'students',
      label: 'Students',
      icon: FaUserGraduate,
      url: '/instructor/student-list',
      parentKey: 'instructor'
    }, {
      key: 'orders',
      label: 'Orders',
      icon: BsCartCheckFill,
      url: '/instructor/order',
      parentKey: 'instructor'
    }, {
      key: 'reviews',
      label: 'Reviews',
      icon: BsStarFill,
      url: '/instructor/review',
      parentKey: 'instructor'
    }, {
      key: 'payout',
      label: 'Payout',
      icon: FaWallet,
      url: '/instructor/payout',
      parentKey: 'instructor'
    }]
  }, {
    key: 'student',
    label: 'Student',
    icon: FaUserGraduate,
    parentKey: 'accounts',
    children: [{
      key: 'dashboard',
      label: 'Dashboard',
      icon: BsGridFill,
      url: '/student/dashboard',
      parentKey: 'student'
    }, {
      key: 'subscriptions',
      label: 'My Subscriptions',
      icon: BsCardChecklist,
      url: '/student/subscription',
      parentKey: 'student'
    }, {
      key: 'courses',
      label: 'Courses',
      icon: BsBasketFill,
      url: '/student/course-list',
      parentKey: 'student'
    }, {
      key: 'resume',
      label: 'Course Resume',
      icon: FaRegFileAlt,
      url: '/student/course-resume',
      parentKey: 'student'
    }, {
      key: 'quiz',
      label: 'Quiz',
      icon: BsQuestionDiamond,
      url: '/student/quiz',
      parentKey: 'student'
    }, {
      key: 'paymentInfo',
      label: 'Payment Info',
      icon: BsCreditCard2FrontFill,
      url: '/student/payment-info',
      parentKey: 'student'
    }, {
      key: 'wishlist',
      label: 'Wishlist',
      icon: BsCartCheckFill,
      url: '/student/bookmark',
      parentKey: 'student'
    }]
  }, {
    key: 'admin',
    label: 'Admin',
    icon: FaUserCog,
    url: '/admin/dashboard',
    parentKey: 'accounts',
    divider: true
  }, {
    key: 'editProfile',
    label: 'Edit Profile',
    icon: FaEdit,
    url: '/instructor/edit-profile',
    parentKey: 'accounts'
  }, {
    key: 'setting',
    label: 'Settings',
    icon: FaCog,
    url: '/instructor/setting',
    parentKey: 'accounts'
  }, {
    key: 'deleteProfile',
    label: 'Delete Profile',
    icon: FaTrashAlt,
    url: '/instructor/delete-account',
    parentKey: 'accounts',
    divider: true
  }, {
    key: 'dropdown',
    label: 'Dropdown levels',
    parentKey: 'accounts',
    children: [{
      key: 'dropdownEnd',
      label: 'Dropdown (end)',
      parentKey: 'dropdown',
      children: [{
        key: 'item-1',
        label: 'Dropdown item',
        parentKey: 'dropdownEnd'
      }, {
        key: 'item-2',
        label: 'Dropdown item',
        parentKey: 'dropdownEnd'
      }]
    }, {
      key: 'dropdownItem',
      label: 'Dropdown item',
      parentKey: 'dropdown'
    }, {
      key: 'dropdownStart',
      label: 'Dropdown (start)',
      parentKey: 'dropdown',
      children: [{
        key: 'item-1',
        label: 'Dropdown item',
        parentKey: 'dropdownStart'
      }, {
        key: 'item-2',
        label: 'Dropdown item',
        parentKey: 'dropdownStart'
      }]
    }, {
      key: 'dropdownItem1',
      label: 'Dropdown item',
      parentKey: 'dropdown'
    }]
  }]
}];
export const MEGA_MENU_ITEMS = {
  getStarted: [{
    label: 'Data Science'
  }, {
    label: 'Salesforce CRM'
  }, {
    label: 'Java Fullstack Development'
  }, {
    label: 'DevOps'
  }, {
    label: 'Cybersecurity'
  }, {
    label: 'Networking'
  }, {
    label: 'Software Testing'
  }],
  degree: [{
    image: clientUnitLogo1,
    label: 'Salesforce Admin',
    description: 'Weekdays / Weekends'
  }, {
    image: clientUnitLogo2,
    label: 'Salesforce Development',
    description: 'Weekdays / Weekends'
  }, {
    image: clientUnitLogo3,
    label: 'Lightning Web Components',
    description: 'Expert mentors'
  }, {
    image: clientUnitLogo4,
    label: 'Amazon Web Services',
    description: 'Hands-on projects'
  }, {
    image: clientUnitLogo1,
    label: 'Manual & Automation Testing',
    description: 'Job-ready skills'
  }],
  certificate: [{
    label: 'Data Science (AI+ML)',
    description: 'No prerequisites',
    icon: FcGoogle,
    iconClass: 'text-google-icon'
  }, {
    label: 'Cybersecurity',
    description: 'No prerequisites',
    icon: FaLinkedinIn,
    iconClass: 'text-linkedin'
  }, {
    label: 'Networking',
    description: 'Expert mentors',
    icon: FaFacebook,
    iconClass: 'text-facebook'
  }, {
    label: 'DevOps',
    description: 'Project-based',
    icon: FaBasketballBall,
    iconClass: 'text-dribbble'
  }]
};
export const ADMIN_MENU_ITEMS = [{
  key: 'admin',
  label: 'Dashboard',
  icon: BsHouse,
  url: '/admin/dashboard'
}, {
  key: 'pages',
  isTitle: true,
  label: 'Pages'
}, {
  key: 'courses',
  label: 'Courses',
  icon: BsBasket,
  children: [{
    key: 'all-courses',
    label: 'All Courses',
    parentKey: 'courses',
    url: '/admin/all-courses'
  }, {
    key: 'course-category',
    label: 'Course Category',
    url: '/admin/course-category',
    parentKey: 'courses'
  }, {
    key: 'course-detail',
    label: 'Course Detail',
    url: '/admin/course-detail',
    parentKey: 'courses'
  }]
}, {
  key: 'students',
  label: 'Students',
  icon: FaUserGraduate,
  url: '/admin/students'
}, {
  key: 'instructors',
  label: 'Instructors',
  icon: FaUserTie,
  children: [{
    key: 'instructors',
    label: 'Instructors',
    url: '/admin/instructors',
    parentKey: 'instructors'
  }, {
    key: 'instructor-detail',
    label: 'Instructor Detail',
    url: '/admin/instructor-detail',
    parentKey: 'instructors'
  }, {
    key: 'instructor-requests',
    label: 'Instructor Requests',
    url: '/admin/instructor-requests',
    parentKey: 'instructors',
    badge: '2'
  }]
}, {
  key: 'reviews',
  label: 'Reviews',
  icon: FaRegCommentDots,
  url: '/admin/reviews'
}, {
  key: 'earnings',
  label: 'Earnings',
  icon: FaChartBar,
  url: '/admin/earnings'
}, {
  key: 'admin-settings',
  label: 'Admin Settings',
  icon: FaUserCog,
  url: '/admin/admin-settings'
}, {
  key: 'authentication',
  label: 'Authentication',
  icon: BsLock,
  children: [{
    key: 'sign-up',
    label: 'Sign Up',
    url: '/auth/sign-up',
    parentKey: 'authentication'
  }, {
    key: 'sign-in',
    label: 'Sign In',
    url: '/auth/sign-in',
    parentKey: 'authentication'
  }, {
    key: 'forgot-password',
    label: 'Forgot Password',
    url: '/auth/forgot-password',
    parentKey: 'authentication'
  }, {
    key: 'error-404',
    label: 'Error 404',
    url: '/admin/not-found',
    parentKey: 'authentication'
  }]
}];
