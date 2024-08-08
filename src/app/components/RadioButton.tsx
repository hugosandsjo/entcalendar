import "../RadioButton.css";

type RadioButtonProps = {
  category: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

function RadioButton({ category, onChange, checked }: RadioButtonProps) {
  return (
    <>
      <label className="text-2xl rounded cursor-pointer " htmlFor={category}>
        <input
          type="radio"
          id={category}
          name="category"
          value={category}
          className="hidden"
          onChange={onChange}
          checked={checked}
        />
        <span className="radio-label py-2 px-4 border border-black rounded-3xl">
          {category}
        </span>
      </label>
    </>
  );
}

export default RadioButton;
