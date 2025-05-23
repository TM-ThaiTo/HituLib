import { getFooter } from '@/api/portal/api-footer';
import './footer.css';
export default async function MainFooter() {
  const data = await getFooter();

  if (!data)
    return (
      <footer className="bg-white px-4 py-6 shadow-inner">
        <span className="text-red-500">Lỗi lấy footer</span>
      </footer>
    );

  return (
    <footer className="bg-white px-4 py-6 shadow-inner">
      <div className="container mx-auto" dangerouslySetInnerHTML={{ __html: data.noiDung }} />
    </footer>
  );
}
