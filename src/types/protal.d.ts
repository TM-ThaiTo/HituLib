// ========== MENU NAVIGATION ==========
type MenuNavigation = {
  id: number;
  tieuDe: string;
  duongDan: string;
  icon: string;
  parentId: number;
  sapXep: number;
  moCuaSoMoi: boolean;

  children:
    | {
        id: number;
        tieuDe: string;
        duongDan: string;
        icon: string;
        parentId: number;
        sapXep: number;
        moCuaSoMoi: boolean;
      }[]
    | null;
};
type MenuNavigations = MenuNavigation[];

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

export type {
  MenuNavigation,
  MenuNavigations,
  BannerType,
  BannersType,
  FooterType,
  NewEventType,
  NewEventsType,
  BookType,
  BooksType,
  NewDetailType,
  NewDetailsType,
};
