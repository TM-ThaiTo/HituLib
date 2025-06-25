'use client';

import Icons from '@/components/shares/icons';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useState } from 'react';
import DocumentDetail from './document-tab-detail';
import DocumentTabPositionCopy from './document-tab-position-copy';
import { DocumentType } from '@/types/opac-document';
import DocumentTabCitation from './document-tab-citation';

type Props = {
  document: DocumentType;
};

export default function DocumentTabs({ document }: Props) {
  const [activeTab, setActiveTab] = useState<string>('detail');

  return (
    <>
      <section className="md:col-span-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-3">
            <TabsTrigger
              value="detail"
              className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Icons.bookOpen className="mr-2 h-4 w-4" />
              Thông tin chi tiết
            </TabsTrigger>
            <TabsTrigger
              value="position-copy"
              className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Icons.bookA className="mr-2 h-4 w-4" />
              Bản sao và vị trí
            </TabsTrigger>
            <TabsTrigger
              value="citation"
              className="cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Icons.filter className="mr-2 h-4 w-4" />
              Trích dẫn
            </TabsTrigger>
          </TabsList>

          <Separator />

          <TabsContent value="detail">
            <DocumentDetail document={document} />
          </TabsContent>
          <TabsContent value="position-copy">
            <DocumentTabPositionCopy document={document} />
          </TabsContent>
          <TabsContent value="citation">
            <DocumentTabCitation document={document} />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
