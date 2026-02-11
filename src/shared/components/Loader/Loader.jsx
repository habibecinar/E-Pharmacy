import './Loader.css';

const Loader = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return <div className="loader-spinner"></div>;
};

export default Loader;
