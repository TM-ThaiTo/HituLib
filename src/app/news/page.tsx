'use client';
import { useRouter } from "@/hooks/use-router";
export default function LayoutsNews() {
    const router = useRouter();
    return router.push('/category/tin-tuc');;
}
