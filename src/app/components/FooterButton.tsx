type FooterButtonProps = {
  text: string;
};

function FooterButton({ text }: FooterButtonProps) {
  return (
    <>
      <p className="hover:underline">{text}</p>
    </>
  );
}

export default FooterButton;
