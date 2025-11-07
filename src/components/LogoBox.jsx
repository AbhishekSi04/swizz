import { Link } from 'react-router-dom';
const LogoBox = ({
  height,
  width
}) => {
  const pngPathLight = '/assets/images/VeltrixLogoLight.png'; // public path to the Veltrix PNG for light backgrounds
  const pngPathDark = '/assets/images/VeltrixLogo.png'; // public path to the Veltrix PNG for dark backgrounds
  const onImgError = (e, fallback) => {
    e.target.onerror = null;
    e.target.src = fallback;
  };
  return (
    <Link className="navbar-brand" to="/">
      <img
        height={height}
        width={width}
        className="light-mode-item navbar-brand-item"
        src="/assets/images/VeltrixLogoLight.png"
        alt="Veltrix IT Solutions"
        onError={(e) => onImgError(e, pngPathLight)}
      />

      <img
        height={height}
        width={width}
        className="dark-mode-item navbar-brand-item"
        src="/assets/images/VeltrixLogo.png"
        alt="Veltrix IT Solutions"
        onError={(e) => onImgError(e, pngPathDark)}
      />
    </Link>
  );
};
export default LogoBox;
