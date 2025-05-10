import { getFooter } from '@/services/portal-services';
import './footer.css';
export default async function MainFooter() {
  const data = await getFooter();
  return (
    <footer className="bg-white px-4 py-6 shadow-inner">
      <div className="container mx-auto" dangerouslySetInnerHTML={{ __html: data.noiDung }} />
    </footer>
  );
}
