'use client';

import Link from 'next/link';
import OptimizedImage from '@/lib/image';
import { getListDocument } from '@/constants/documents';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useEffect } from 'react';

export default function OpacDocumentLatest() {

    const [documents, setDocuments] = useState<any[]>([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            const docs = await getListDocument();
            setDocuments(docs.slice(0, 4)); // Hiển thị 4 tài liệu đầu tiên ban đầu
        };
        fetchDocuments();
    }, []);
    const handleShowAll = async () => {
        const allDocuments = await getListDocument(); // Lấy tất cả tài liệu từ API
        setDocuments(allDocuments); // Cập nhật state để hiển thị tất cả tài liệu
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {documents.map((doc) => (
                    <Link href={`/opac/document/${doc.id}`} key={doc.id} className="block group">
                        <div className="border rounded-md p-4 h-full hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex flex-col">
                            <div className="flex justify-center mb-4 w-full h-48">
                                <OptimizedImage
                                    src={doc.coverImage}
                                    alt={doc.title}
                                    className="rounded-md border border-gray-200 object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col flex-grow justify-between">
                                <h3 className="font-medium text-blue-600 group-hover:underline text-center line-clamp-2 mb-2">
                                    {doc.title}
                                </h3>
                                <p className="text-sm text-gray-500 text-center mb-4">
                                    {doc.authors.join(', ')}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Button variant="outline" onClick={handleShowAll}>
                    Xem tất cả
                </Button>
            </div>
        </div>
    )
}