import PropTypes from "prop-types";

function CustomTitle({ title, subtitle, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      {children}
    </>
  );
}

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomTitle;
