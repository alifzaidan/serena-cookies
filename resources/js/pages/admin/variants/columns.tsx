'use client';

import { DataTableColumnHeader } from '@/components/data-table-column-header';
import DeleteConfirmDialog from '@/components/delete-dialog';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, Trash } from 'lucide-react';
import { useState } from 'react';
import EditVariant from './edit';

export default function VariantActions({ variant }: { variant: Variant }) {
    const [open, setOpen] = useState(false);
    const handleDelete = () => {
        router.delete(route('variants.destroy', variant.id));
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Edit className="size-4" />
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Edit Varian</p>
                    </TooltipContent>
                </Tooltip>
                <DialogContent>
                    <EditVariant variant={variant} setOpen={setOpen} />
                </DialogContent>
            </Dialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div>
                        <DeleteConfirmDialog
                            trigger={
                                <Button variant="link" size="icon" className="size-8 text-red-500 hover:cursor-pointer">
                                    <Trash />
                                    <span className="sr-only">Hapus Varian</span>
                                </Button>
                            }
                            title="Apakah Anda yakin ingin menghapus varian ini?"
                            itemName={variant.name}
                            onConfirm={handleDelete}
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Hapus Varian</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}

export type Variant = {
    id: string;
    name: string;
};

export const columns: ColumnDef<Variant>[] = [
    {
        accessorKey: 'no',
        header: 'No',
        cell: ({ row }) => {
            const index = row.index + 1;
            return <div className="font-medium">{index}</div>;
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Nama Varian" />,
        cell: ({ row }) => {
            return <div className="font-medium">{row.original.name}</div>;
        },
    },
    {
        id: 'actions',
        header: () => <div className="text-center">Aksi</div>,
        cell: ({ row }) => <VariantActions variant={row.original} />,
    },
];
