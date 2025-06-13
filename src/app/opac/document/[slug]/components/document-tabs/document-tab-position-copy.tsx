'use client';

import Icons from "@/components/shares/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DocumentType } from "@/types/opac-document";

type Props = {
    document: DocumentType;
};

export default function DocumentTabPositionCopy({ document }: Props) {
    const getAvailabilityDisplay = (availability: string) => {
        const availabilityMap: Record<string, { text: string; className: string }> = {
            available: { text: "Có sẵn", className: "bg-green-100 text-green-800 border border-green-200" },
            on_loan: { text: "Đang được mượn", className: "bg-yellow-100 text-yellow-800 border border-yellow-200" },
            reserved: { text: "Đã đặt trước", className: "bg-blue-100 text-blue-800 border border-blue-200" },
            reference_only: { text: "Chỉ tham khảo", className: "bg-purple-100 text-purple-800 border border-purple-200" },
        };
        return availabilityMap[availability] || {
            text: "Không xác định",
            className: "bg-gray-100 text-gray-800 border border-gray-200"
        };
    };

    if (!document) {
        return (
            <div className="rounded-md bg-red-50 p-4 text-red-600">
                <Icons.alertCircle className="mr-2 inline-block h-5 w-5" />
                Không tìm thấy thông tin tài liệu.
            </div>
        );
    }

    const availabilityInfo = getAvailabilityDisplay(document.availability);

    return (
        <div className="flex flex-col gap-6">
            <Table className="w-full border border-gray-200 rounded-md overflow-hidden">
                <TableHeader>
                    <TableRow className="bg-gray-50">
                        <TableHead className="text-left px-4 py-2">VỊ TRÍ</TableHead>
                        <TableHead className="text-left px-4 py-2">KÝ HIỆU PHÂN LOẠI</TableHead>
                        <TableHead className="text-left px-4 py-2">TRẠNG THÁI</TableHead>
                        <TableHead className="text-left px-4 py-2">THAO TÁC</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="hover:bg-gray-50 transition">
                        <TableCell className="text-sm text-gray-800 px-4 py-2 align-middle">
                            <Icons.mapPin className="mr-2 inline-block h-4 w-4 text-blue-500" />
                            {document.location || "Không rõ"}
                        </TableCell>
                        <TableCell className="text-sm text-gray-700 px-4 py-2 align-middle">
                            {document.callNumber || "Không rõ"}
                        </TableCell>
                        <TableCell className="px-4 py-2 align-middle">
                            <Badge
                                variant="outline"
                                className={`text-sm ${availabilityInfo.className}`}
                            >
                                {availabilityInfo.text}
                            </Badge>
                        </TableCell>
                        <TableCell className="px-4 py-2 text-left align-middle">
                            <Button
                                variant="outline"
                                disabled={document.availability !== 'available'}
                                className={`text-sm ${document.availability === 'available'
                                    ? ''
                                    : 'cursor-not-allowed opacity-50'
                                    }`}
                            >
                                <Icons.bookOpen className="mr-1 h-4 w-4" />
                                Đặt chỗ
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>


            <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 text-blue-800 shadow-sm">
                <Icons.info className="h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="text-sm font-semibold mb-1">Thông tin vị trí</h4>
                    <p className="text-sm leading-relaxed">
                        Tài liệu này được đặt tại <strong>Kho sách tầng 2</strong>. Vui lòng liên hệ nhân viên thư viện nếu bạn cần hỗ trợ tìm tài liệu hoặc không tìm thấy tại vị trí này.
                    </p>
                </div>
            </div>
        </div>
    );
}
