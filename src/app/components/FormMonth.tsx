type MonthProps = {
  defaultValue?: string;
};

export default function FormMonth({ defaultValue }: MonthProps) {
  return (
    <>
      <label htmlFor="options">Month</label>
      <select
        className="p-4 border border-black"
        id="month"
        name="month"
        defaultValue={defaultValue}
      >
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </>
  );
}
