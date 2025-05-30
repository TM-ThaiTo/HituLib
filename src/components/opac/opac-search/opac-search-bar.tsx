'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icons from "@/components/shares/icons";

export default function OpacSearchBar() {
    const [search, setSearch] = useState("");
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSearch = async () => {
        // Xử lý tìm kiếm ở đây (ví dụ: gọi API hoặc filter dữ liệu)

        const data = await fetch(`https://api.hoangkhanhcds.com/api/search/fulltext?q=${search}&page=1&pageSize=4`)

        console.log("Tìm kiếm:", data);
    };

    return (
        <div className="w-full mx-auto">
            <div className="flex items-center gap-2 w-full">
                <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Icons.search className="w-4 h-4" />
                    </span>
                    <Input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="pl-9"
                        onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                    />
                </div>
                <Button onClick={handleSearch} className="shrink-0 flex items-center gap-1 bg-[#0a58ca] text-white hover:bg-[#0a58ca]/90 cursor-pointer">
                    <Icons.search className="w-4 h-4" />
                    Tìm kiếm
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setShowAdvanced(v => !v)}
                    className="shrink-0 cursor-pointer"
                >
                    <Icons.slidersHorizontal className="w-4 h-4" />
                    Bộ lọc nâng cao
                </Button>
            </div>
            {showAdvanced && (
                <div className="mt-4 p-4 border rounded bg-muted">
                    {/* Thêm các trường bộ lọc nâng cao ở đây */}
                    <span className="text-sm text-muted-foreground">Bộ lọc nâng cao (placeholder)</span>
                </div>
            )}
        </div>
    );
}