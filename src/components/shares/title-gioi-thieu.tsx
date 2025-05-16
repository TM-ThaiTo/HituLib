export default function TieuDeGioiThieu({ tieuDe }: { tieuDe: string }) {
  return (
    <>
      <div className="mb-4 text-center">
        <h2 className="inline-block rounded-md bg-blue-100 px-4 py-2 text-base font-semibold text-blue-600 uppercase">
          {/* GIỚI THIỆU THƯ VIỆN */}
          {tieuDe}
        </h2>
      </div>
    </>
  );
}
