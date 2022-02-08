import "./styles.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>
        {props.text} - {props.subtext}
      </h1>
    </div>
  );
};

export default Header;
