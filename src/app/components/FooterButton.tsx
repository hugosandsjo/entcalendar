type FooterButtonProps = {
  text: string;
};

function FooterButton({ text }: FooterButtonProps) {
  return (
    <>
      <p className="hover:underline mb-2">{text}</p>
    </>
  );
}

export default FooterButton;
