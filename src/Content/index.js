import "./styles.css";
const Content = (props) => {
  return (
    <div className="content">
      <h1>{props.text}</h1>

      {props.children}
    </div>
  );
};

export default Content;
