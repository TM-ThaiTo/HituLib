import slugify from 'slugify';

const mapSlug = (slug: string) =>
  slugify(slug, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true,
  });

const mapSlugWithId = (slug: string, id: number) => {
  const slugifyId = `${mapSlug(slug)}-${id}.html`;
  return slugifyId;
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
