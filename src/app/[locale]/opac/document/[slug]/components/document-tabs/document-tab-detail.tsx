import Icons from '@/components/shares/icons';
import { DocumentType } from '@/types/opac-document';
import { useTranslations } from 'next-intl';

function getLanguageDisplay(language: string, t: any): string {
  const languageMap: Record<string, string> = {
    vietnamese: t('detail.languages.vietnamese'),
    english: t('detail.languages.english'),
    french: t('detail.languages.french'),
    german: t('detail.languages.german'),
    chinese: t('detail.languages.chinese'),
    japanese: t('detail.languages.japanese'),
    korean: t('detail.languages.korean'),
    russian: t('detail.languages.russian'),
    spanish: t('detail.languages.spanish'),
  };
  return languageMap[language] || language;
}

function DetailItem({
  icon,
  label,
  value,
  type,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number | null | undefined;
  type: string;
}) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  return (
    <div className="flex items-start gap-2">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-gray-600">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

type Props = {
  document: DocumentType;
};
export default function DocumentDetail({ document }: Props) {
  const t = useTranslations('document');

  return (
    <>
      {/* Details */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm text-gray-800 sm:grid-cols-2">
        <div className="flex items-start gap-2">
          <div className="mt-1 text-blue-600">
            <Icons.user className="h-4 w-4" />
          </div>
          <div>
            <p className="text-gray-600">{t('detail.author')}</p>
            <div className="space-y-1">
              {document.authors?.map((author, index) => (
                <p key={index} className="leading-tight font-medium">
                  {author.name}
                  {author.affiliation && (
                    <span className="text-sm text-gray-500"> – {author.affiliation}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
        <DetailItem
          icon={<Icons.faBarcode className="h-4 w-4" />}
          label={t('detail.isbn')}
          value={document.isbn}
          type="isbn"
        />
        <DetailItem
          icon={<Icons.faBuilding className="h-4 w-4" />}
          label={t('detail.publisher')}
          value={document.publisher}
          type="publisher"
        />
        <DetailItem
          icon={<Icons.faFileAlt className="h-4 w-4" />}
          label={t('detail.call_number')}
          value={document.callNumber}
          type="callNumber"
        />
        <DetailItem
          icon={<Icons.calendar className="h-4 w-4" />}
          label={t('detail.publication_year')}
          value={document.publicationYear}
          type="publicationYear"
        />
        <DetailItem
          icon={<Icons.mapPin className="h-4 w-4" />}
          label={t('detail.location')}
          value={document.location}
          type="location"
        />
        <DetailItem
          icon={<Icons.languages className="h-4 w-4" />}
          label={t('detail.language')}
          value={getLanguageDisplay(document.language || '', t)}
          type="language"
        />
      </div>

      {/* Subjects */}
      <div className="mt-6">
        <h2 className="mb-2 flex items-center gap-2 text-base font-semibold">
          {t('detail.subjects')}
        </h2>
        <div className="flex flex-wrap gap-2">
          {document.subjects.map((subject, idx) => (
            <span key={idx} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Keywords */}
      {document.keywords?.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 flex items-center gap-2 text-base font-semibold">
            {t('detail.keywords')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {document.keywords.map((kw, idx) => (
              <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
