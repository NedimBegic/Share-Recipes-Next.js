import styleModule from "./ErrorModule.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.hideModule} className={styleModule.backdrop}></div>
  );
};

const MessageDiv = (props) => {
  return (
    <div className={styleModule.message}>
      <p>{props.content}</p>
      <button onClick={props.hideModule} type="button">
        Ok
      </button>
    </div>
  );
};

const ErrorModule = (props) => {
  return (
    <div>
      <Backdrop hideModule={props.hideModule} />
      <MessageDiv content={props.content} hideModule={props.hideModule} />
    </div>
  );
};

export default ErrorModule;
