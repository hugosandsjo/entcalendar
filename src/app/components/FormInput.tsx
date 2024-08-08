type FormInputProps = {
  title: string;
  name: string;
};

function FormInput({ title, name }: FormInputProps) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input
        className="p-3 border border-black rounded-md max-w-2xl"
        type="text"
        id={name}
        name={name}
        required
      ></input>
    </>
  );
}

export default FormInput;
