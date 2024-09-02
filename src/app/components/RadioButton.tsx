import "../RadioButton.css";

type RadioButtonProps = {
  category: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

function RadioButton({ category, onChange, checked }: RadioButtonProps) {
  return (
    <>
      <label className="text-1xl rounded cursor-pointer " htmlFor={category}>
        <input
          type="radio"
          id={category}
          name="category"
          value={category}
          className="hidden"
          onChange={onChange}
          checked={checked}
        />
        <span className="radio-label py-3 px-5 border border-black rounded-full">
          {category}
        </span>
      </label>
    </>
  );
}

export default RadioButton;
