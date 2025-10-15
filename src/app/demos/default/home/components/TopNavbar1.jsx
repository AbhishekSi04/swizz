import LogoBox from '@/components/LogoBox';
import TopNavbar from '@/components/TopNavbar';
import { useLayoutContext } from '@/context/useLayoutContext';
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileDropdown from '@/components/TopNavbar/components/ProfileDropdown';
// import { APP_MENU_ITEMS } from '@/assets/data/menu-items';
import { CATEGORY_MENU_ITEMS } from '@/assets/data/menu-items';
const TopNavbar1 = () => {
  const {
    appMenuControl
  } = useLayoutContext();
  return <TopNavbar>
      <Container fluid className="px-2 px-xl-5">
        <div className="row w-100 align-items-center g-0">
          <div className="col-6 col-md-3 col-xl-2 d-flex align-items-center">
            <LogoBox height={50} width={180} />
          </div>

          <div className="col-12 col-md-7 col-xl-8 d-flex align-items-center justify-content-center">
            <ul className="navbar-nav align-items-center gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/pages/about/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/demos/default/home#popular-courses">Courses</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm btn-primary ms-xl-2" to="/demos/default/home/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 col-xl-2 d-flex align-items-center justify-content-end">
            <ProfileDropdown className="ms-1 ms-lg-2" />
          </div>
        </div>
      </Container>
    </TopNavbar>;
};
export default TopNavbar1;
