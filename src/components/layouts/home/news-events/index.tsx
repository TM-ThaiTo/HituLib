import TitleLayout from '@/components/shares/title-layout';
import CustomLink from '@/hooks/next-link';
import { mapSlugNews } from '@/lib/slug';
import { mapImagePath } from '@/lib/utils';
import { newEvents } from '@/constants/home';
import { getNewLastest } from '@/api/portal/api-new';
import OptionalImage from '@/lib/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function NewsEventsLayout() {
  const dataNewsEvents = await getNewLastest();
  const data = dataNewsEvents ? dataNewsEvents : newEvents;
  const t = await getTranslations('home.news_events');

  return (
    <div className="max-w-[1074px] rounded-lg bg-[var(--card)] p-4 shadow-sm sm:p-6 md:p-9">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <TitleLayout title={t('title')} />
        </div>
        <Button
          variant="ghost"
          className="group flex items-center gap-1 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)]"
          asChild
        >
          <CustomLink href="/category/tin-tuc">
            {t('view_more')}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </CustomLink>
        </Button>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="group flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <CustomLink href={`${mapSlugNews(item.tieuDe, item.id)}`}>
                <OptionalImage
                  width={112}
                  height={80}
                  src={mapImagePath(item.anhDaiDien)}
                  alt={item.tieuDe}
                  className="h-[80px] w-[112px] transform rounded-md object-cover transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-32"
                />
              </CustomLink>
            </div>

            <div className="flex-1">
              <CustomLink href={`${mapSlugNews(item.tieuDe, item.id)}`}>
                <div className="cursor-pointer text-base font-medium transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {item.tieuDe}
                </div>
              </CustomLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
