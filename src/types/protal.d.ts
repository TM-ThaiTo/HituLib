// ========== MENU NAVIGATION ==========
type MenuNavigationType = {
  id: number;
  tieuDe: string;
  duongDan: string;
  icon: string | null;
  parentId: number;
  sapXep: number;
  moCuaSoMoi: boolean;
  children: MenuNavigation[] | null;
};
type MenuNavigationsType = MenuNavigation[];

// ========== BANNER ==========
type BannerType = {
  id: number;
  tieuDe: string;
  lienKet: string;
  duongDan: string;
};
type BannersType = BannerType[];

// ========== FOOTER ==========
type FooterType = {
  id: number;
  tieuDe: string;
  noiDung: string;
};

// ========== NEW EVENTS ==========
type NewEventType = {
  id: number;
  tieuDe: string;
  mota: string | null;
  anhDaiDien: string;
  ngayTao: string;
  loaiId: number | null;
};
type NewEventsType = NewEventType[];

// ========== BOOK ==========
type BookType = {
  id: number;
  tieuDe: string;
  anhDaiDien: string;
};
type BooksType = BookType[];

// ========== NewDetail ==========
type NewDetailType = {
  id: number;
  tieuDe: string;
  tomTat: string;
  noiDung: string;
  anhDaiDien: string;
  ngayTao: string;
  loaiTinTuc: number;
};
type NewDetailsType = NewDetailType[];

// ========== Dịch Vụ ==========
type DetailServiceType = {
  id: number;
  tieuDe: string;
  mota: string;
  noiDung: string;
  anhDaiDien: '';
  sapXep: 1;
  ngayTao: '2023-10-21T09:14:42.763';
};

type DetailServicesType = DetailServiceType[];

// ========== Giới thiệu chung ==========
type IntroductionType = {
  id: number;
  tieuDe: string;
  noiDung: string;
  ngayTao: string;
  trangThai: number;
};

type IntroductionsType = IntroductionType[];

// ========== Dịch vụ nghiệp vụ ==========
type LibraryserviceType = {
  id: number;
  tieuDe: string;
  moTa: string;
  noiDung: string;
  duongDan1: string;
  ngayTao: string;
};
type LibraryservicesType = LibraryserviceType[];

// ========== Hướng dẫn ==========
type GuideType = {
  id: number;
  tieuDe: string;
  noiDung: string;
  sapXep: number;
};
type GuidesType = GuideType[];

export type {
  MenuNavigationType,
  MenuNavigationsType,
  BannerType,
  BannersType,
  FooterType,
  NewEventType,
  NewEventsType,
  BookType,
  BooksType,
  NewDetailType,
  NewDetailsType,
  DetailServiceType,
  DetailServicesType,
  IntroductionType,
  IntroductionsType,
  LibraryserviceType,
  LibraryservicesType,
  GuideType,
  GuidesType,
};
