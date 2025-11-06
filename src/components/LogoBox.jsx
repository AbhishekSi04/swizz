import { Link } from 'react-router-dom';
const LogoBox = ({
  height,
  width
}) => {
  const pngPath = '/assets/images/veltrixLogo.png'; // public path to the Veltrix PNG
  const onImgError = (e, fallback) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallback;
    }
  };
  return (
    <Link className="navbar-brand" to="/">
      <img
        height={height}
        width={width}
        className="light-mode-item navbar-brand-item"
        src="/assets/images/veltrixLogo.png"
        alt="Veltrix IT Solutions"
        onError={(e) => onImgError(e, pngPath)}
      />
      <img
        height={height}
        width={width}
        className="dark-mode-item navbar-brand-item"
        src="/assets/images/veltrixLogo.png"
        alt="Veltrix IT Solutions"
        onError={(e) => onImgError(e, pngPath)}
      />
    </Link>
  );
};
export default LogoBox;
