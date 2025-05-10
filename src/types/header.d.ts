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
export { MenuNavigation, MenuNavigations };
