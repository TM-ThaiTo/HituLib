import Link from 'next/link';
import { ReactNode } from 'react';

type CustomLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
};

const CustomLink = ({ href = '#', children, className = '', target, rel }: CustomLinkProps) => {
  const normalizedHref = href?.startsWith('/') ? href : `/${href}`;

  return (
    <Link
      href={normalizedHref}
      className={className}
      target={target}
      rel={target === '_blank' ? rel || 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
