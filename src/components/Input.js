const Input = (props) => {
  return (
    <div>
      <input type="text" onChange={props.setValue} value={props.name}></input>
      <button>Get Length</button>
      <p>{props.getLength}</p>
    </div>
  );
};

export default Input;
