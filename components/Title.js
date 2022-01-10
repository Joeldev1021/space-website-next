const Title = ({ num, text }) => {
  return (
      <h1 className="title">
          <span>{num}</span> {text}
      </h1>
  );
};

export default Title;
