type RadioButtonProps = {
  category: string;
};

function RadioButton({ category }: RadioButtonProps) {
  return (
    <>
      <div>
        <input type="radio" id={category} name="category" value={category} />
        <label htmlFor={category}>{category}</label>
      </div>
    </>
  );
}

export default RadioButton;
