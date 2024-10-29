import { IoSend } from "react-icons/io5";

const Textbar = () => {
  return (
    <textarea className="textarea textarea-error" placeholder="Bio">
      <IoSend className="h-7 w-8 " />
    </textarea>
  );
};

export default Textbar;
