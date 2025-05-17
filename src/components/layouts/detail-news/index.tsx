import Icons from '@/components/shares/icons';
import Image from 'next/image';
import './styles.css';
import { NewDetailType } from '@/types/protal';
import { mapImagePath } from '@/lib/utils';

type Props = {
  data: NewDetailType;
};

export default function DetailNews({ data }: Props) {
  const renderTypeNews = (type: number) => {
    switch (type) {
      case 1:
        return 'Tin tức';
      case 2:
        return 'Sự kiện';
      case 3:
        return 'Thông báo';
      case 4:
        return 'Tài liệu';
      case 5:
        return 'Hội thảo';
      case 6:
        return 'Cuộc thi';
      default:
        return 'Tin tức';
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h1 className="text-xl leading-snug font-bold text-gray-900 sm:text-2xl">
            {data.tieuDe}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
            <p>Ngày đăng: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}</p>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-1">
              <Icons.news className="h-4 w-4 text-gray-500" />
              <span>{renderTypeNews(data?.loaiTinTuc)}</span>
            </div>
          </div>

          <hr className="border-gray-200" />
        </div>

        {data.anhDaiDien && (
          <img
            // src={data.anhDaiDien}
            src={mapImagePath(data.anhDaiDien)}
            alt="News Thumbnail"
            className="custom-content rounded-lg"
          />
        )}

        <p className="mt-2 text-base text-gray-800 sm:text-lg">{data.tomTat}</p>

        <div
          className="custom-content prose prose-sm sm:prose-base mt-6"
          dangerouslySetInnerHTML={{ __html: data.noiDung }}
        />
      </div>
    </div>
  );
}
