type FormInputProps = {
  title: string;
  name: string;
  defaultValue?: string;
};

function FormInputLarge({ title, name, defaultValue }: FormInputProps) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <textarea
        className="p-3 border border-black rounded-md h-60 resize-none"
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
      ></textarea>
    </>
  );
}

export default FormInputLarge;
