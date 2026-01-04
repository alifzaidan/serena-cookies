import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kategori Hampers',
        href: '/admin/hamper-categories',
    },
    {
        title: 'Edit Kategori',
        href: '#',
    },
];

interface HamperCategory {
    id: number;
    name: string;
}

interface EditHamperCategoryProps {
    category: HamperCategory;
}

export default function EditHamperCategory({ category }: EditHamperCategoryProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('hamper-categories.update', category.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Kategori Hampers" />
            <div className="px-4 py-4 md:px-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold">Edit Kategori Hampers</h1>
                    <p className="text-sm text-muted-foreground">Ubah informasi kategori hampers.</p>
                </div>

                <form onSubmit={submit} className="max-w-2xl space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nama Kategori *</Label>
                        <Input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Contoh: Lebaran, Natal, dll"
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="flex gap-4">
                        <Button type="submit" disabled={processing}>
                            Simpan Perubahan
                        </Button>
                        <Link href={route('hamper-categories.index')}>
                            <Button type="button" variant="outline">
                                Batal
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
