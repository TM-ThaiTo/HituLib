import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { DocumentType } from "@/types/opac-document"
import { useState } from "react";
import { toast } from "sonner";

type Props = {
    document: DocumentType;
}

export default function DocumentTabCitation({ document }: Props) {
    const [activeFormat, setActiveFormat] = useState<'APA' | 'MLA' | 'Chicago'>('APA');

    const getCitationText = (format: 'APA' | 'MLA' | 'Chicago') => {
        switch (format) {
            case 'APA':
                return `${document.authors.map((a) => a.name).join(", ")} (${document.publicationYear}). ${document.title}${document.publisher ? `. ${document.publisher}` : "."}${document.doi ? ` https://doi.org/${document.doi}` : ""}`;
            case 'MLA':
                return `${document.authors.map((a) => a.name).join(", ")}. ${document.title}${document.publisher ? `, ${document.publisher}` : "."} ${document.publicationYear}.`;
            case 'Chicago':
                return `${document.authors.map((a) => a.name).join(", ")}. ${document.title}${document.publisher ? `. ${document.publisher}` : "."} ${document.publicationYear}.${document.doi ? ` https://doi.org/${document.doi}` : ""}`;
        }
    };

    const handleCopyCitation = () => {
        const citationText = getCitationText(activeFormat);
        navigator.clipboard.writeText(citationText);
        toast.success("Đã sao chép trích dẫn vào clipboard");
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Trích dẫn</CardTitle>
                    <CardDescription>Các định dạng trích dẫn cho tài liệu này</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-medium mb-2">APA</h3>
                        <div className="p-3 bg-gray-50 rounded-md">
                            {document.authors.map((a) => a.name).join(", ")} ({document.publicationYear}).
                            <em> {document.title}</em>
                            {document.publisher ? `. ${document.publisher}` : "."}
                            {document.doi ? ` https://doi.org/${document.doi}` : ""}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">MLA</h3>
                        <div className="p-3 bg-gray-50 rounded-md">
                            {document.authors.map((a) => a.name).join(", ")}.<em> {document.title}</em>
                            {document.publisher ? `, ${document.publisher}` : "."}
                            {document.publicationYear}.
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Chicago</h3>
                        <div className="p-3 bg-gray-50 rounded-md">
                            {document.authors.map((a) => a.name).join(", ")}.<em>{document.title}</em>
                            {document.publisher ? `. ${document.publisher}` : "."}
                            {document.publicationYear}.{document.doi ? ` https://doi.org/${document.doi}` : ""}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <div className="flex gap-2 w-full">
                        <Button
                            variant={activeFormat === 'APA' ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setActiveFormat('APA')}
                        >
                            APA
                        </Button>
                        <Button
                            variant={activeFormat === 'MLA' ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setActiveFormat('MLA')}
                        >
                            MLA
                        </Button>
                        <Button
                            variant={activeFormat === 'Chicago' ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setActiveFormat('Chicago')}
                        >
                            Chicago
                        </Button>
                    </div>
                    <Button variant="outline" className="w-full" onClick={handleCopyCitation}>
                        Sao chép trích dẫn
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}