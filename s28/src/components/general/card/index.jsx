const Card = ({ variant, children }) => {
  return <div className={`card card--${variant}`}>{children}</div>;
};

export default Card;
