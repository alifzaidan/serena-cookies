import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import UserLayout from '@/layouts/user-layout';
import { rupiahFormatter } from '@/lib/utils';
import { Head } from '@inertiajs/react';
import { ArrowRight, Award, Clock, Cookie, Shield, ShoppingBag, Sparkles } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    price_regular: number;
    price_jar?: number;
    image?: string;
    variant: {
        name: string;
    };
}

interface Hamper {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
}

interface Catalog {
    id: string;
    title: string;
    description?: string;
    image?: string;
}

interface HomeProps {
    featured_products: Product[];
    featured_hampers: Hamper[];
    catalogs: Catalog[];
}

export default function Home({ featured_products, featured_hampers, catalogs }: HomeProps) {
    return (
        <UserLayout>
            <Head title="Serena Cookies - Kue Kering Berkualitas Premium" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-amber-50 to-secondary">
                <div className="container mx-auto max-w-7xl px-4 pt-20 pb-10 md:pt-32 md:pb-16">
                    <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                        <div className="col-span-3 flex flex-col justify-center space-y-4 md:space-y-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-medium text-amber-900 md:text-sm">
                                <Sparkles className="h-4 w-4" />
                                Kue Kering Premium
                            </div>
                            <h1 className="font-black-mango text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Serena
                                <span className="text-primary"> Cookies</span>
                            </h1>
                            <p className="text-md text-muted-foreground md:text-lg">
                                Kue kering berkualitas premium dengan cita rasa istimewa. Dibuat dengan bahan pilihan terbaik untuk kebahagiaan
                                keluarga Anda.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button size="lg" className="gap-2">
                                    <ShoppingBag className="h-5 w-5" />
                                    Pesan Sekarang
                                </Button>
                                <Button size="lg" variant="outline">
                                    Lihat Katalog
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-2">
                            <img
                                src="/assets/images/all-variant.jpg"
                                alt="All Variant Serena Cookies"
                                className="w-full rounded-3xl border-4 border-primary"
                            />
                            {/* Floating badges */}
                            <div className="absolute top-8 -right-4 rounded-2xl bg-secondary p-4 shadow-xl dark:bg-gray-900">
                                <Cookie className="h-6 w-6 text-amber-600 md:h-8 md:w-8" />
                            </div>
                            <div className="absolute bottom-8 -left-4 rounded-2xl bg-secondary p-4 shadow-xl dark:bg-gray-900">
                                <Award className="h-6 w-6 text-green-600 md:h-8 md:w-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-32 overflow-hidden bg-secondary md:h-40">
                <InfiniteSlider gap={24} reverse className="mt-8 -ml-[5%] w-[110%] -rotate-2 bg-primary p-4 md:py-5">
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                    <h3 className="font-black-mango text-lg font-semibold text-secondary md:text-2xl">Almond</h3>
                    <Cookie className="h-8 w-8 text-secondary-foreground" />
                </InfiniteSlider>
            </div>

            {/* Features Section */}
            <section className="border-y bg-muted/30 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                                <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Kualitas Premium</h3>
                                <p className="text-sm text-muted-foreground">Bahan pilihan terbaik</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Higienis & Aman</h3>
                                <p className="text-sm text-muted-foreground">Proses produksi terjamin</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Selalu Fresh</h3>
                                <p className="text-sm text-muted-foreground">Produksi setiap hari</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Produk Unggulan</h2>
                        <p className="text-lg text-muted-foreground">Pilihan terbaik untuk setiap momen spesial Anda</p>
                    </div>

                    {featured_products.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featured_products.map((product) => (
                                <Card key={product.id} className="group overflow-hidden transition-all hover:shadow-lg">
                                    <div className="aspect-square overflow-hidden bg-muted">
                                        {product.image ? (
                                            <img
                                                src={`/storage/${product.image}`}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <ShoppingBag className="h-20 w-20 text-muted-foreground/20" />
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900 dark:bg-amber-900/30 dark:text-amber-100">
                                            {product.variant.name}
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-amber-600">{rupiahFormatter.format(product.price_regular)}</span>
                                            {product.price_jar && (
                                                <span className="text-sm text-muted-foreground">
                                                    / {rupiahFormatter.format(product.price_jar)} (toples)
                                                </span>
                                            )}
                                        </div>
                                        <Button className="mt-4 w-full" variant="outline">
                                            Lihat Detail
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground/20" />
                            <p className="text-muted-foreground">Belum ada produk tersedia</p>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <Button size="lg" variant="outline">
                            Lihat Semua Produk
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Hampers Section */}
            {featured_hampers.length > 0 && (
                <section className="bg-muted/30 py-20">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Paket Hampers</h2>
                            <p className="text-lg text-muted-foreground">Hadiah sempurna untuk orang-orang terkasih</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {featured_hampers.map((hamper) => (
                                <Card key={hamper.id} className="overflow-hidden transition-all hover:shadow-xl">
                                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                                        {hamper.image ? (
                                            <img src={`/storage/${hamper.image}`} alt={hamper.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <ShoppingBag className="h-20 w-20 text-muted-foreground/20" />
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="mb-2 text-xl font-semibold">{hamper.name}</h3>
                                        {hamper.description && (
                                            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{hamper.description}</p>
                                        )}
                                        <div className="mb-4 text-2xl font-bold text-amber-600">{rupiahFormatter.format(hamper.price)}</div>
                                        <Button className="w-full">Pesan Sekarang</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Catalogs Section */}
            {catalogs.length > 0 && (
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Katalog Terbaru</h2>
                            <p className="text-lg text-muted-foreground">Lihat koleksi lengkap produk kami</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {catalogs.map((catalog) => (
                                <Card key={catalog.id} className="group overflow-hidden transition-all hover:shadow-lg">
                                    <div className="aspect-video overflow-hidden bg-muted">
                                        {catalog.image ? (
                                            <img
                                                src={`/storage/${catalog.image}`}
                                                alt={catalog.title}
                                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <ShoppingBag className="h-16 w-16 text-muted-foreground/20" />
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="mb-2 text-lg font-semibold">{catalog.title}</h3>
                                        {catalog.description && <p className="line-clamp-2 text-sm text-muted-foreground">{catalog.description}</p>}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-600 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Siap Memesan?</h2>
                    <p className="mb-8 text-lg text-amber-100">Hubungi kami sekarang untuk pemesanan dan informasi lebih lanjut</p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button size="lg" variant="secondary" className="gap-2">
                            <ShoppingBag className="h-5 w-5" />
                            Pesan Sekarang
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                            Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section>

            <a
                href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg transition hover:bg-primary/90"
                aria-label="Chat WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                    <g
                        fill="#fcf7f2"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                    >
                        <g transform="scale(8,8)">
                            <path d="M16,3c-3.78906,0 -7.23437,1.11328 -9.78125,2.97656c-2.55078,1.85938 -4.21875,4.53125 -4.21875,7.52344c0,3.62891 2.47266,6.69922 6,8.55078v6.94922l6.74609,-5.0625c0.41016,0.03125 0.82422,0.0625 1.25391,0.0625c3.78906,0 7.23438,-1.11328 9.78125,-2.97266c2.55078,-1.86328 4.21875,-4.53516 4.21875,-7.52734c0,-2.99219 -1.66797,-5.66406 -4.21875,-7.52344c-2.54687,-1.86328 -5.99219,-2.97656 -9.78125,-2.97656zM16,5c3.39063,0 6.44531,1.01563 8.60156,2.58984c2.15625,1.57422 3.39844,3.65625 3.39844,5.91016c0,2.25391 -1.24219,4.33594 -3.39844,5.91016c-2.15625,1.57422 -5.21094,2.58984 -8.60156,2.58984c-0.49219,0 -0.98437,-0.02734 -1.47656,-0.07422l-0.38281,-0.03125l-4.14062,3.10547v-4.14062l-0.57812,-0.26562c-3.35156,-1.57422 -5.42187,-4.20703 -5.42187,-7.09375c0,-2.25391 1.24219,-4.33594 3.39844,-5.91016c2.15625,-1.57422 5.21094,-2.58984 8.60156,-2.58984z"></path>
                        </g>
                    </g>
                </svg>
            </a>
        </UserLayout>
    );
}
