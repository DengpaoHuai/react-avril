import PropTypes from "prop-types";

const CustomCard = ({ title, footerText, children }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>{footerText}</p>
      </footer>
    </>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomCard;
