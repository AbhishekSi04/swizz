import LogoBox from '@/components/LogoBox';
import TopNavbar from '@/components/TopNavbar';
import { useLayoutContext } from '@/context/useLayoutContext';
import { Container, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileDropdown from '@/components/TopNavbar/components/ProfileDropdown';
import TopbarMenuToggler from '@/components/TopNavbar/components/TopbarMenuToggler';
import { useAuthContext } from '@/context/useAuthContext';
// import { APP_MENU_ITEMS } from '@/assets/data/menu-items';
import { CATEGORY_MENU_ITEMS } from '@/assets/data/menu-items';
const TopNavbar1 = () => {
  const { appMenuControl } = useLayoutContext();
  const { isAuthenticated } = useAuthContext();
  return <TopNavbar>
      <Container fluid className="px-2 px-lg-4 px-xl-5 position-relative">
        {/* Absolute mobile toggler at top-right */}
        <div className="d-md-none position-absolute end-0 top-0 mt-2 me-2 z-3">
          <TopbarMenuToggler />
        </div>
        <div className="row w-100 align-items-center g-2 g-md-3">
          {/* Left: Logo placeholder (kept invisible per request) */}
          <div className="col-6 col-md-3 col-xl-2 d-flex align-items-center order-1">
            <LogoBox height={50} width={180} />
          </div>

          {/* Center: Primary nav + Auth actions (collapsible on mobile) */}
          <div className="col-12 col-md-6 col-xl-8 d-flex align-items-center justify-content-center order-3 order-md-2">
            <Collapse in={appMenuControl.open} className="w-100 navbar-collapse d-md-block mobile-nav-overlay">
              <div>
                <ul className="navbar-nav flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-4 my-2 my-md-0">
                  <li className="nav-item">
                    <Link className="nav-link px-2" to="/pages/about/about-us">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2" href="/demos/default/home#popular-courses">Courses</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link px-2" to="/pages/services">Services</Link>
                  </li>
                  {/* Contact stays in center; auth buttons only visible here on mobile */}
                  <li className="nav-item d-flex align-items-center mt-2 mt-md-0">
                    <Link className="btn btn-sm btn-primary" to="/demos/default/home/contact">Contact Us</Link>
                  </li>
                  {/* Mobile-only: show profile when authenticated */}
                  {isAuthenticated && (
                    <li className="nav-item d-flex align-items-center mt-2 d-md-none">
                      <ProfileDropdown className="ms-0" />
                    </li>
                  )}
                  {!isAuthenticated && (
                    <li className="nav-item d-flex align-items-center gap-2 mt-2 d-md-none">
                      <Link className="btn btn-sm btn-outline-primary" to="/auth/sign-in">Sign In</Link>
                      <Link className="btn btn-sm btn-outline-primary" to="/auth/sign-up">Sign Up</Link>
                    </li>
                  )}
                </ul>
              </div>
            </Collapse>
          </div>

          {/* Right: Auth area on md+ (Profile if logged in, Sign In/Up otherwise) */}
          <div className="col-6 col-md-3 col-xl-2 d-none d-md-flex align-items-center justify-content-end order-2 order-md-3 gap-2">
            {isAuthenticated ? (
              <ProfileDropdown className="ms-1 ms-lg-2" />
            ) : (
              <>
                <Link className="btn btn-sm btn-outline-primary" to="/auth/sign-in">Sign In</Link>
                <Link className="btn btn-sm btn-outline-primary" to="/auth/sign-up">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </TopNavbar>;
};
export default TopNavbar1;
