import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DocumentType } from '@/types/opac-document';
import { toast } from 'sonner';
import Icons from '@/components/shares/icons';

type Props = {
  document: DocumentType;
};

export default function DocumentTabCitation({ document }: Props) {
  const citationFormats = [
    {
      key: 'APA',
      label: 'APA',
      getText: () =>
        `${document.authors.map((a) => a.name).join(', ')} (${document.publicationYear}). ${document.title}${document.publisher ? `. ${document.publisher}` : '.'}${document.doi ? ` https://doi.org/${document.doi}` : ''}`,
      render: () => (
        <>
          {document.authors.map((a) => a.name).join(', ')} ({document.publicationYear}).
          <em> {document.title}</em>
          {document.publisher ? `. ${document.publisher}` : '.'}
          {document.doi ? ` https://doi.org/${document.doi}` : ''}
        </>
      ),
    },
    {
      key: 'MLA',
      label: 'MLA',
      getText: () =>
        `${document.authors.map((a) => a.name).join(', ')}. ${document.title}${document.publisher ? `, ${document.publisher}` : '.'} ${document.publicationYear}.`,
      render: () => (
        <>
          {document.authors.map((a) => a.name).join(', ')}.<em> {document.title}</em>
          {document.publisher ? `, ${document.publisher}` : '.'}
          {document.publicationYear}.
        </>
      ),
    },
    {
      key: 'Chicago',
      label: 'Chicago',
      getText: () =>
        `${document.authors.map((a) => a.name).join(', ')}. ${document.title}${document.publisher ? `. ${document.publisher}` : '.'} ${document.publicationYear}.${document.doi ? ` https://doi.org/${document.doi}` : ''}`,
      render: () => (
        <>
          {document.authors.map((a) => a.name).join(', ')}.<em>{document.title}</em>
          {document.publisher ? `. ${document.publisher}` : '.'}
          {document.publicationYear}.{document.doi ? ` https://doi.org/${document.doi}` : ''}
        </>
      ),
    },
  ];

  const handleCopyCitation = (formatKey: string) => {
    const format = citationFormats.find((f) => f.key === formatKey);
    if (!format) return;
    const citationText = format.getText();
    navigator.clipboard.writeText(citationText);
    toast.success('Đã sao chép trích dẫn vào clipboard');
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Trích dẫn</CardTitle>
          <CardDescription>Các định dạng trích dẫn cho tài liệu này</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {citationFormats.map((format) => (
            <div key={format.key}>
              <h3 className="mb-2 font-medium">{format.label}</h3>
              <div className="relative rounded-md bg-gray-50 p-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => handleCopyCitation(format.key)}
                  aria-label={`Sao chép trích dẫn ${format.label}`}
                >
                  <Icons.copy size={18} />
                </Button>
                {format.render()}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
