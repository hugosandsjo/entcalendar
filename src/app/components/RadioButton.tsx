import "../RadioButton.css";

type RadioButtonProps = {
  category: string;
};

function RadioButton({ category }: RadioButtonProps) {
  return (
    <>
      <label className="text-2xl rounded cursor-pointer " htmlFor={category}>
        <input
          type="radio"
          id={category}
          name="category"
          value={category}
          className="hidden"
        />
        <span className="radio-label py-2 px-4 border border-black rounded-3xl">
          {category}
        </span>
      </label>
    </>
  );
}

export default RadioButton;
