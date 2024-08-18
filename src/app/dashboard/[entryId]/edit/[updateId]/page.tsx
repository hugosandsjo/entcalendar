export default function editPage({ params }: { params: { entryId: number } }) {
  return (
    <>
      <h1>Editing {params.entryId}</h1>
    </>
  );
}
