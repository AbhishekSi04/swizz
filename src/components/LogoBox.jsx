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
  return <Link className="navbar-brand" to="/">
      <img
        className="light-mode-item navbar-brand-item"
        src={pngPath}
        alt="Swhizz logo"
        onError={(e) => onImgError(e, logo)}
        style={{ height, width, objectFit: 'contain' }}
      />
      <img
        className="dark-mode-item navbar-brand-item"
        src={pngPath}
        alt="Swhizz logo"
        onError={(e) => onImgError(e, logoLight)}
        style={{ height, width, objectFit: 'contain' }}
      />
    </Link>;
};
export default LogoBox;
