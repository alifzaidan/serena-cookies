'use client';

import { DataTableColumnHeader } from '@/components/data-table-column-header';
import DeleteConfirmDialog from '@/components/delete-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, Trash } from 'lucide-react';

export default function CategoryActions({ category }: { category: HamperCategory }) {
    const handleDelete = () => {
        router.delete(route('hamper-categories.destroy', category.id));
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={route('hamper-categories.edit', category.id)}>
                        <Button variant="ghost" size="icon">
                            <Edit className="size-4" />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Edit Kategori</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <DeleteConfirmDialog
                            trigger={
                                <Button variant="link" size="icon" className="size-8 text-red-500 hover:cursor-pointer">
                                    <Trash />
                                    <span className="sr-only">Hapus Kategori</span>
                                </Button>
                            }
                            title="Apakah Anda yakin ingin menghapus kategori ini?"
                            itemName={category.name}
                            onConfirm={handleDelete}
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Hapus Kategori</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}

export type HamperCategory = {
    id: number;
    name: string;
    hampers_count?: number;
};

export const columns: ColumnDef<HamperCategory>[] = [
    {
        id: 'actions',
        header: () => <div className="text-center"></div>,
        cell: ({ row }) => <CategoryActions category={row.original} />,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nama Kategori" />,
        cell: ({ row }) => {
            return <div className="font-medium">{row.original.name}</div>;
        },
    },
    {
        accessorKey: 'hampers_count',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Jumlah Hampers" />,
        cell: ({ row }) => {
            const count = row.original.hampers_count || 0;
            return (
                <div className="flex items-center gap-2">
                    <Badge>{count}</Badge>
                    <span className="text-sm text-muted-foreground">hampers</span>
                </div>
            );
        },
    },
];
