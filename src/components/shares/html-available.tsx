import TieuDeGioiThieu from '@/components/shares/title-gioi-thieu';

type Props = {
  title: string;
  content?: string | null | undefined;
  noContent?: string;
};

export default function HtmlAvailable({ title, content, noContent }: Props) {
  return (
    <div className="bg-background text-foreground rounded-lg p-6 shadow-sm">
      <TieuDeGioiThieu tieuDe={title} />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          {content ? (
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <span className="flex justify-center text-red-500">{noContent}</span>
          )}
        </div>
      </div>
    </div>
  );
}
