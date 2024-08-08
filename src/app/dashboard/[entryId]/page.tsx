export default function UpdateEntryPage({
  params,
}: {
  params: { entryId: string };
}) {
  return <h1>{params.entryId}</h1>;
}
