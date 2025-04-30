import { MdOutlineAttachMoney } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});

const Moneyfield = (props: IInput) => {
  const {
    value = "",
    iconAfter = <MdOutlineAttachMoney />,
    onChange,
    ...rest
  } = props;

  const formatMoney = (amount: string) => {
    if (!amount) return "";

    const numberValue = parseFloat(amount.replace(/[^0-9]/g, ""));
    return isNaN(numberValue) ? "" : currencyFormatter.format(numberValue);
  };

  const formattedValue = formatMoney(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/[^0-9]/g, "");
    const formattedValue = formatMoney(rawValue);

    const cursorPosition = input.selectionStart ?? 0;

    input.value = formattedValue;

    const diff = formattedValue.length - rawValue.length;
    const newCursorPosition = cursorPosition + diff;

    input.setSelectionRange(newCursorPosition, newCursorPosition);

    if (onChange) {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: rawValue,
          name: e.target.name || e.target.id,
        },
      });
    }
  };

  return (
    <InputUI
      {...rest}
      value={formattedValue}
      iconAfter={iconAfter}
      onChange={handleChange}
    />
  );
};

export { Moneyfield };
