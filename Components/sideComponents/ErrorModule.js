import { motion } from "framer-motion";
import styleModule from "./ErrorModule.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.hideModule} className={styleModule.backdrop}></div>
  );
};

const MessageDiv = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styleModule.message}
    >
      <p>{props.content}</p>
      <button onClick={props.hideModule} type="button">
        Ok
      </button>
    </motion.div>
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
