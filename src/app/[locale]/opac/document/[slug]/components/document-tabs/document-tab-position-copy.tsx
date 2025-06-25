'use client';

import Icons from '@/components/shares/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DocumentType } from '@/types/opac-document';
import { useTranslations } from 'next-intl';

type Props = {
  document: DocumentType;
};

export default function DocumentTabPositionCopy({ document }: Props) {
  const t = useTranslations('document');

  const getAvailabilityDisplay = (availability: string) => {
    const availabilityMap: Record<string, { text: string; className: string }> = {
      available: {
        text: t('position_copy.availability.available'),
        className: 'bg-green-100 text-green-800 border border-green-200',
      },
      on_loan: {
        text: t('position_copy.availability.on_loan'),
        className: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      },
      reserved: {
        text: t('position_copy.availability.reserved'),
        className: 'bg-blue-100 text-blue-800 border border-blue-200',
      },
      reference_only: {
        text: t('position_copy.availability.reference_only'),
        className: 'bg-purple-100 text-purple-800 border border-purple-200',
      },
    };
    return (
      availabilityMap[availability] || {
        text: t('position_copy.availability.unknown'),
        className: 'bg-gray-100 text-gray-800 border border-gray-200',
      }
    );
  };

  if (!document) {
    return (
      <div className="rounded-md bg-red-50 p-4 text-red-600">
        <Icons.alertCircle className="mr-2 inline-block h-5 w-5" />
        {t('position_copy.error')}
      </div>
    );
  }

  const availabilityInfo = getAvailabilityDisplay(document.availability);

  return (
    <div className="flex flex-col gap-6">
      <Table className="w-full overflow-hidden rounded-md border border-gray-200">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="px-4 py-2 text-left">{t('position_copy.table.position')}</TableHead>
            <TableHead className="px-4 py-2 text-left">{t('position_copy.table.call_number')}</TableHead>
            <TableHead className="px-4 py-2 text-left">{t('position_copy.table.status')}</TableHead>
            <TableHead className="px-4 py-2 text-left">{t('position_copy.table.action')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="transition hover:bg-gray-50">
            <TableCell className="px-4 py-2 align-middle text-sm text-gray-800">
              <Icons.mapPin className="mr-2 inline-block h-4 w-4 text-blue-500" />
              {document.location || 'Không rõ'}
            </TableCell>
            <TableCell className="px-4 py-2 align-middle text-sm text-gray-700">
              {document.callNumber || 'Không rõ'}
            </TableCell>
            <TableCell className="px-4 py-2 align-middle">
              <Badge variant="outline" className={`text-sm ${availabilityInfo.className}`}>
                {availabilityInfo.text}
              </Badge>
            </TableCell>
            <TableCell className="px-4 py-2 text-left align-middle">
              <Button
                variant="outline"
                disabled={document.availability !== 'available'}
                className={`text-sm ${document.availability === 'available' ? '' : 'cursor-not-allowed opacity-50'
                  }`}
              >
                <Icons.bookOpen className="mr-1 h-4 w-4" />
                {t('position_copy.actions.reserve')}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 text-blue-800 shadow-sm">
        <Icons.info className="mt-1 h-5 w-5 flex-shrink-0" />
        <div>
          <h4 className="mb-1 text-sm font-semibold">{t('position_copy.info.title')}</h4>
          <p className="text-sm leading-relaxed">
            {t('position_copy.info.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
