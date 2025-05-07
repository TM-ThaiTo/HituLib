// type MenuNavigation = {
//     id: number;
//     tieuDe: string;
//     duongDan: string;
//     icon: string;
//     parentId: number;
//     sapXep: number;
//     moCuaSoMoi: boolean;

//     children: {
//         id: number;
//         tieuDe: string;
//         duongDan: string;
//         icon: string;
//         parentId: number;
//         sapXep: number;
//         moCuaSoMoi: boolean;
//     }[] | null;
// }

type MenuItem = {
    id: number;
    tieuDe: string;
    duongDan: string;
    icon: string;
    parentId: number;
    sapXep: number;
    moCuaSoMoi: boolean;
};

export type MenuNavigation = MenuItem & {
    children: MenuItem[] | null;
};
