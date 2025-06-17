import slugify from 'slugify';

const mapSlug = (slug: string) =>
  slugify(slug, {
    replacement: '-',
    remove: /[!@#$%^&*(),.?":{}|<>]/g,
    lower: true,
    strict: false,
    locale: 'vi',
    trim: true,
  });

const mapSlugWithId = (slug: string, id: number, url = '') => {
  const slugifyId = `${mapSlug(slug)}-p${id}.html`;
  return url ? `/${url}/${slugifyId}` : `/${slugifyId}`;
};

const mapSlugNews = (tieuDe: string, id: number) => {
  return mapSlugWithId(tieuDe, id, 'news');
};

const getIdFromSlug = (slug: string) => {
  try {
    const match = slug.trim().match(/-p(\d+)\.html$/);
    if (!match) return null;

    const id = parseInt(match[1], 10);
    return isNaN(id) ? null : id;
  } catch {
    return null;
  }
};

export { mapSlug, mapSlugWithId, getIdFromSlug, mapSlugNews };
