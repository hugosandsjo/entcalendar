type FormInputProps = {
  title: string;
  name: string;
  defaultValue?: string | number | undefined;
};

export default function FormInput({
  title,
  name,
  defaultValue,
}: FormInputProps) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input
        className="p-3 border border-black rounded-md "
        type="text"
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
      ></input>
    </>
  );
}
