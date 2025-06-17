import './styles.css';
import Icons from '@/components/shares/icons';
import { NewDetailType } from '@/types/portal';
import { mapImagePath } from '@/lib/utils';
import renderTypeNews from '@/constants/type-page';
import OptionalImage from '@/lib/image';

type Props = {
  data: NewDetailType;
};

export default function DetailNews({ data }: Props) {
  return (
    <div className="flex h-auto w-full flex-col gap-6 rounded-lg p-4 shadow-md sm:p-6">
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
          <div className="mx-auto flex h-auto w-full max-w-[900px] justify-center overflow-hidden">
            <OptionalImage
              width={900}
              height={500}
              src={mapImagePath(data.anhDaiDien)}
              alt="News Thumbnail"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
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
