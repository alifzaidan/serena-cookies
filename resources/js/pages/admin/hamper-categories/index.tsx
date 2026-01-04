import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { HamperCategory, columns } from './columns';
import { DataTable } from './data-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kategori Hampers',
        href: '/admin/hamper-categories',
    },
];

interface HamperCategoriesProps {
    categories: HamperCategory[];
    flash?: {
        success?: string;
        error?: string;
    };
}

export default function HamperCategories({ categories, flash }: HamperCategoriesProps) {
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kategori Hampers" />
            <div className="px-4 py-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold">Kategori Hampers</h1>
                        <p className="text-sm text-muted-foreground">Kelola kategori untuk hampers Anda.</p>
                    </div>
                    <Link href={route('hamper-categories.create')}>
                        <Button className="hover:cursor-pointer">
                            Tambah Kategori
                            <Plus />
                        </Button>
                    </Link>
                </div>
                <DataTable columns={columns} data={categories} />
            </div>
        </AppLayout>
    );
}
