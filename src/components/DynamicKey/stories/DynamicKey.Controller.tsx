import { DynamicKey, IDynamicKey } from "..";

const DynamicKeyController = (props: IDynamicKey) => {
  const handleChange = (newValue: string) => {
    props.onChange?.(newValue);
  };

  const handleComplete = (completeValue: string) => {
    props.onComplete?.(completeValue);
  };

  return (
    <DynamicKey
      {...props}
      onChange={handleChange}
      onComplete={handleComplete}
    />
  );
};

export { DynamicKeyController };
