import logo from '@/assets/images/logo.svg';
import logoLight from '@/assets/images/logo-light.svg';
import { Link } from 'react-router-dom';
const LogoBox = ({
  height,
  width
}) => {
  const pngPath = '/swhizz-logo.png'; // place PNG in public/swhizz-logo.png
  const onImgError = (e, fallback) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallback;
    }
  };
  return <Link className="navbar-brand" to="/" />;
};
export default LogoBox;
