import EntryFormUpdate from "@/app/components/EntryFormUpdate";

export default function Update({ params }: { params: { entryId: number } }) {
  return (
    <>
      <EntryFormUpdate id={params.entryId} />
    </>
  );
}
