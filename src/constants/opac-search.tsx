import Icons from '@/components/shares/icons';
import React, { JSX } from 'react';
import { AdvancedType } from '@/types/opac-search';

//======= SUGGESTION_DATA ======//
const TRENDING_SEARCH_DATA = [
  'machine learning',
  'blockchain',
  'internet of things',
  'big data',
  'cloud computing',
];

const PROPOSED_DATA = [
  'Giáo trình Lập trình hướng đối tượng với Java',
  'Nhập môn Trí tuệ nhân tạo',
  'Kiến trúc máy tính và Hệ điều hành',
  'Lập trình hướng đối tượng với Java',
];

function SUGGESTION_DATA(query: string): string[] {
  return [
    `${query} cơ bản`,
    `${query} nâng cao`,
    `${query} ứng dụng`,
    `giáo trình ${query}`,
    `${query} cho người mới bắt đầu`,
  ];
}

//======= OPAC_SEARCH_ADVANCED_CATEGORY ======//
const DOCUMENT_TYPE_OPTIONS = (t: any) => [
  {
    id: 'material-book',
    label: t('document_type_options.book'),
    icon: <Icons.bookOpen className="mr-1 ml-1 h-4 w-4 text-blue-700" />,
    color: 'text-blue-700',
  },
  {
    id: 'material-journal',
    label: t('document_type_options.journal'),
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-purple-500" />,
    color: 'text-purple-500',
  },
  {
    id: 'material-thesis',
    label: t('document_type_options.thesis'),
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-orange-500" />,
    color: 'text-orange-500',
  },
  {
    id: 'material-video',
    label: t('document_type_options.video'),
    icon: <Icons.camera className="mr-1 ml-1 h-4 w-4 text-red-500" />,
    color: 'text-red-500',
  },
  {
    id: 'material-database',
    label: t('document_type_options.database'),
    icon: <Icons.database className="mr-1 ml-1 h-4 w-4 text-blue-400" />,
    color: 'text-blue-400',
  },
  {
    id: 'material-ebook',
    label: t('document_type_options.ebook'),
    icon: <Icons.bookA className="mr-1 ml-1 h-4 w-4 text-green-600" />,
    color: 'text-green-600',
  },
  {
    id: 'material-audio',
    label: t('document_type_options.audio'),
    icon: <Icons.music className="mr-1 ml-1 h-4 w-4 text-orange-400" />,
    color: 'text-orange-400',
  },
];

const LANGUAGE_OPTIONS = (t: any) => [
  {
    id: 'language-vietnamese',
    label: t('language_options.vietnamese'),
    icon: <Icons.mapPin className="mr-1 h-4 w-4 text-red-500" />,
  },
  {
    id: 'language-english',
    label: t('language_options.english'),
    icon: <Icons.languages className="mr-1 h-4 w-4 text-blue-500" />,
  },
  {
    id: 'language-chinese',
    label: t('language_options.chinese'),
    icon: <Icons.languages className="mr-1 h-4 w-4 text-yellow-500" />,
  },
  {
    id: 'language-japanese',
    label: t('language_options.japanese'),
    icon: <Icons.languages className="mr-1 h-4 w-4 text-pink-500" />,
  },
];

//======= OPAC_SEARCH_ADVANCED_ACCESS ======//
const LOCATION_OPTIONS = (
  filter: any,
  t: any,
  handleLocationChange: (location: string) => void,
): AdvancedType[] => [
  {
    id: 'location-main',
    label: t('location_options.main'),
    checked: filter.locations?.includes('main') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-red-600" />,
    onChange: () => handleLocationChange('main'),
  },
  {
    id: 'location-it',
    label: t('location_options.it'),
    checked: filter.locations?.includes('it') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-blue-600" />,
    onChange: () => handleLocationChange('it'),
  },
  {
    id: 'location-engineering',
    label: t('location_options.engineering'),
    checked: filter.locations?.includes('engineering') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-green-600" />,
    onChange: () => handleLocationChange('engineering'),
  },
  {
    id: 'location-economics',
    label: t('location_options.economics'),
    checked: filter.locations?.includes('economics') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-amber-600" />,
    onChange: () => handleLocationChange('economics'),
  },
];

const AVAILABILITY_OPTIONS = (
  filter: any,
  t: any,
  handleAvailabilityChange: (availability: string) => void,
): AdvancedType[] => [
  {
    id: 'availability-available',
    label: t('availability_options.available'),
    checked: filter.availability?.includes('available') || false,
    onChange: () => handleAvailabilityChange('available'),
  },
  {
    id: 'availability-online',
    label: t('availability_options.online_access'),
    checked: filter.availability?.includes('onlineAccess') || false,
    onChange: () => handleAvailabilityChange('onlineAccess'),
  },
  {
    id: 'availability-fulltext',
    label: t('availability_options.fulltext'),
    checked: filter.availability?.includes('fulltext') || false,
    onChange: () => handleAvailabilityChange('fulltext'),
  },
  {
    id: 'availability-open-access',
    label: t('availability_options.open_access'),
    checked: filter.availability?.includes('openAccess') || false,
    onChange: () => handleAvailabilityChange('openAccess'),
  },
];

const ACCESS_OPTIONS = (t: any) => [
  {
    id: 'access-all',
    label: t('access_options.all'),
    value: 'all',
  },
  {
    id: 'access-free',
    label: t('access_options.free'),
    value: 'free',
  },
  {
    id: 'access-subscription',
    label: t('access_options.subscription'),
    value: 'subscription',
  },
  {
    id: 'access-restricted',
    label: t('access_options.restricted'),
    value: 'restricted',
  },
];

export {
  //======= SUGGESTION_DATA ======//
  TRENDING_SEARCH_DATA,
  PROPOSED_DATA,
  SUGGESTION_DATA,
  //======= OPAC_SEARCH_ADVANCED_CATEGORY ======//
  DOCUMENT_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
  //======= OPAC_SEARCH_ADVANCED_ACCESS ======//
  ACCESS_OPTIONS,
  LOCATION_OPTIONS,
  AVAILABILITY_OPTIONS,
};
