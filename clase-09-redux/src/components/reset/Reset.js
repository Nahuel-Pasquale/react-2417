import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { reset } from "../../slices/counterSlice";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <BiReset
      cursor="pointer"
      size="38px"
      color="#F24C4C"
      onClick={() => dispatch(reset())}
    />
  );
};

export default Reset;
