import { useState } from "react";
import { IRadio, Radio } from "..";

const RadioController = (props: IRadio) => {
  const { checked } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    props.onChange(event);
  };

  return <Radio {...props} checked={isChecked} onChange={handleChange} />;
};

export { RadioController };
