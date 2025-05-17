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

const mapSlugWithId = (slug: string, id: number, prefix = '') => {
  const slugifyId = `${mapSlug(slug)}-${id}.html`;
  return `${prefix ? '/' + prefix : ''}/${slugifyId}`;
};

const getIdFromSlug = (slug: string) => {
  try {
    const slugParts = slug.trim().split('-');
    const lastPart = slugParts.pop();

    if (!lastPart || !lastPart.endsWith('.html')) return null;

    const idStr = lastPart.replace('.html', '');
    const id = parseInt(idStr, 10);

    return isNaN(id) ? null : id;
  } catch {
    return null;
  }
};

export { mapSlug, mapSlugWithId, getIdFromSlug };
