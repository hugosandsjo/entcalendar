type FormInputProps = {
  title: string;
  name: string;
};

function FormInputLarge({ title, name }: FormInputProps) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <textarea
        className="p-3 border border-black rounded-md h-60 resize-none"
        id={name}
        name={name}
        required
      ></textarea>
    </>
  );
}

export default FormInputLarge;
