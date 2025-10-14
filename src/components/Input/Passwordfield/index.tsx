import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Passwordfield = (props: IInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const iconAfter = showPassword ? (
    <MdOutlineVisibilityOff
      onClick={() => setShowPassword(false)}
      style={{ cursor: "pointer" }}
    />
  ) : (
    <MdOutlineVisibility
      onClick={() => setShowPassword(true)}
      style={{ cursor: "pointer" }}
    />
  );

  return (
    <InputUI
      {...props}
      inputMode="text"
      type={showPassword ? "text" : "password"}
      iconAfter={iconAfter}
    />
  );
};

export { Passwordfield };
