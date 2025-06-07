import Icons from '@/components/shares/icons';
import React, { JSX } from 'react';
import { AdvancedType } from '@/types/opac-search';

//======= OPAC_SEARCH_ADVANCED_CATEGORY ======//
const DOCUMENT_TYPE_OPTIONS = () => [
  {
    id: 'material-book',
    label: 'Sách in',
    icon: <Icons.bookOpen className="mr-1 ml-1 h-4 w-4 text-blue-700" />,
    color: 'text-blue-700',
  },
  {
    id: 'material-journal',
    label: 'Tạp chí/Báo',
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-purple-500" />,
    color: 'text-purple-500',
  },
  {
    id: 'material-thesis',
    label: 'Luận văn/Luận án',
    icon: <Icons.news className="mr-1 ml-1 h-4 w-4 text-orange-500" />,
    color: 'text-orange-500',
  },
  {
    id: 'material-video',
    label: 'Video/Đa phương tiện',
    icon: <Icons.camera className="mr-1 ml-1 h-4 w-4 text-red-500" />,
    color: 'text-red-500',
  },
  {
    id: 'material-database',
    label: 'Cơ sở dữ liệu',
    icon: <Icons.database className="mr-1 ml-1 h-4 w-4 text-blue-400" />,
    color: 'text-blue-400',
  },
  {
    id: 'material-ebook',
    label: 'Sách điện tử',
    icon: <Icons.bookA className="mr-1 ml-1 h-4 w-4 text-green-600" />,
    color: 'text-green-600',
  },
  {
    id: 'material-audio',
    label: 'Âm thanh',
    icon: <Icons.music className="mr-1 ml-1 h-4 w-4 text-orange-400" />,
    color: 'text-orange-400',
  },
];

const LANGUAGE_OPTIONS = () => [
  {
    id: 'language-vietnamese',
    label: 'Tiếng Việt',
    icon: <Icons.mapPin className="mr-1 h-4 w-4 text-red-500" />,
  },
  {
    id: 'language-english',
    label: 'Tiếng Anh',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-blue-500" />,
  },
  {
    id: 'language-chinese',
    label: 'Tiếng Trung',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-yellow-500" />,
  },
  {
    id: 'language-japanese',
    label: 'Tiếng Nhật',
    icon: <Icons.languages className="mr-1 h-4 w-4 text-pink-500" />,
  },
];

//======= OPAC_SEARCH_ADVANCED_ACCESS ======//
const LOCATION_OPTIONS = (
  filter: any,
  handleLocationChange: (location: string) => void,
): AdvancedType[] => [
  {
    id: 'location-main',
    label: 'Thư viện trung tâm',
    checked: filter.locations?.includes('main') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-red-600" />,
    onChange: () => handleLocationChange('main'),
  },
  {
    id: 'location-it',
    label: 'Thư viện khoa CNTT',
    checked: filter.locations?.includes('it') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-blue-600" />,
    onChange: () => handleLocationChange('it'),
  },
  {
    id: 'location-engineering',
    label: 'Thư viện khoa Kỹ thuật',
    checked: filter.locations?.includes('engineering') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-green-600" />,
    onChange: () => handleLocationChange('engineering'),
  },
  {
    id: 'location-economics',
    label: 'Thư viện khoa Kinh tế',
    checked: filter.locations?.includes('economics') || false,
    icon: <Icons.mapPin className="h-4 w-4 text-amber-600" />,
    onChange: () => handleLocationChange('economics'),
  },
];

const AVAILABILITY_OPTIONS = (
  filter: any,
  handleAvailabilityChange: (availability: string) => void,
): AdvancedType[] => [
  {
    id: 'availability-available',
    label: 'Có sẵn',
    checked: filter.availability?.includes('available') || false,
    onChange: () => handleAvailabilityChange('available'),
  },
  {
    id: 'availability-online',
    label: 'Truy cập trực tuyến',
    checked: filter.availability?.includes('onlineAccess') || false,
    onChange: () => handleAvailabilityChange('onlineAccess'),
  },
  {
    id: 'availability-fulltext',
    label: 'Có toàn văn',
    checked: filter.availability?.includes('fulltext') || false,
    onChange: () => handleAvailabilityChange('fulltext'),
  },
  {
    id: 'availability-open-access',
    label: 'Truy cập mở',
    checked: filter.availability?.includes('openAccess') || false,
    onChange: () => handleAvailabilityChange('openAccess'),
  },
];

const ACCESS_OPTIONS = () => [
  {
    id: 'access-all',
    label: 'Tất cả',
    value: 'all',
  },
  {
    id: 'access-free',
    label: 'Miễn phí',
    value: 'free',
  },
  {
    id: 'access-subscription',
    label: 'Yêu cầu đăng ký',
    value: 'subscription',
  },
  {
    id: 'access-restricted',
    label: 'Hạn chế truy cập',
    value: 'restricted',
  },
];

export {
  DOCUMENT_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
  //======= OPAC_SEARCH_ADVANCED_ACCESS ======//
  ACCESS_OPTIONS,
  LOCATION_OPTIONS,
  AVAILABILITY_OPTIONS,
};
