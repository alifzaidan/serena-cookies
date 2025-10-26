import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, Cookie, Gift, MapPin, Package, ShoppingBag, Sparkles } from 'lucide-react';

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

interface Variant {
    id: string;
    name: string;
    products_count: number;
    description?: string;
}

interface HomeProps {
    all_products: Product[];
    variants: Variant[];
}

export default function Home({ all_products, variants }: HomeProps) {
    return (
        <UserLayout>
            <Head title="Serena Cookies - Kue Kering Berkualitas Premium" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-amber-50 to-secondary">
                <div className="container mx-auto max-w-7xl px-4 pt-20 pb-10 md:pt-32 md:pb-16">
                    <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                        <div className="col-span-3 flex flex-col justify-center space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-medium text-amber-900 md:text-sm"
                            >
                                <Sparkles className="h-4 w-4" />
                                Kue Kering Premium
                            </motion.div>
                            <div className="flex gap-1.5 font-black-mango text-4xl font-bold tracking-tight sm:text-5xl md:gap-3 md:text-6xl lg:text-7xl">
                                <TextEffect
                                    per="char"
                                    delay={0.5}
                                    variants={{
                                        container: {
                                            hidden: {
                                                opacity: 0,
                                            },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.05,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: {
                                                opacity: 0,
                                                rotateX: 90,
                                                y: 10,
                                            },
                                            visible: {
                                                opacity: 1,
                                                rotateX: 0,
                                                y: 0,
                                                transition: {
                                                    duration: 0.2,
                                                },
                                            },
                                        },
                                    }}
                                >
                                    Serena
                                </TextEffect>
                                <TextEffect
                                    per="char"
                                    delay={0.5}
                                    variants={{
                                        container: {
                                            hidden: {
                                                opacity: 0,
                                            },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.05,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: {
                                                opacity: 0,
                                                rotateX: 90,
                                                y: 10,
                                            },
                                            visible: {
                                                opacity: 1,
                                                rotateX: 0,
                                                y: 0,
                                                transition: {
                                                    duration: 0.2,
                                                },
                                            },
                                        },
                                    }}
                                    className="text-primary"
                                >
                                    Cookies
                                </TextEffect>
                            </div>
                            <TextEffect per="word" delay={1} speedReveal={2} className="md:text-md text-base">
                                Kue kering berkualitas premium dengan cita rasa istimewa. Dibuat dengan bahan pilihan terbaik untuk kebahagiaan
                                keluarga Anda.
                            </TextEffect>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                                className="flex flex-col gap-3 sm:flex-row"
                            >
                                <Button size="lg" className="gap-2">
                                    <ShoppingBag className="h-5 w-5" />
                                    Pesan Sekarang
                                </Button>
                                <Button size="lg" variant="outline">
                                    Lihat Katalog
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="relative col-span-3 md:col-span-2"
                        >
                            <img
                                src="/assets/images/all-variant.jpg"
                                alt="All Variant Serena Cookies"
                                className="w-full rounded-3xl border-4 border-primary"
                            />
                            {/* Floating badges */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                className="absolute top-8 -right-4 rounded-2xl bg-secondary p-4 shadow-xl dark:bg-gray-900"
                            >
                                <Cookie className="h-6 w-6 text-amber-600 md:h-8 md:w-8" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                className="absolute bottom-8 -left-4 rounded-2xl bg-secondary p-4 shadow-xl dark:bg-gray-900"
                            >
                                <Award className="h-6 w-6 text-green-600 md:h-8 md:w-8" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Infinite Slider */}
            <div className="h-32 overflow-hidden bg-secondary md:h-40">
                <InfiniteSlider gap={24} reverse className="mt-8 -ml-[5%] w-[110%] -rotate-2 bg-primary p-4 md:py-5">
                    {all_products.map((product, index) => (
                        <>
                            <h3 key={`name-${product.id}-${index}`} className="font-black-mango text-lg font-semibold text-secondary md:text-xl">
                                {product.name}
                            </h3>
                            <Cookie key={`icon-${product.id}-${index}`} className="h-8 w-8 text-secondary-foreground" />
                        </>
                    ))}
                </InfiniteSlider>
            </div>

            {/* Features Section */}
            <section className="bg-gradient-to-b from-secondary to-muted/30 py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-medium tracking-wide text-primary uppercase">Kenapa Memilih Kami</p>
                        <h2 className="mt-2 font-black-mango text-3xl font-bold md:text-4xl">Mengapa Banyak yang Memilih Serena Cookies</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="rounded-3xl bg-secondary shadow-sm">
                            <CardContent className="p-8">
                                <h3 className="text-5xl font-bold text-primary">3k+</h3>
                                <p className="mt-3 text-lg font-semibold">Pelanggan Setia</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Lebih dari 3.000 pelanggan telah mempercayakan momen spesial mereka bersama Serena Cookies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl bg-secondary shadow-sm">
                            <CardContent className="flex flex-col gap-4 p-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="h-8 w-8 text-amber-600" />
                                    <h3 className="text-lg font-semibold">Pengiriman Cepat & Fleksibel</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Pesanan dapat dikirim kapan saja sesuai kebutuhan Anda, dengan kemasan tetap aman dan rapi.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8">
                        <Card className="rounded-3xl bg-secondary shadow-sm">
                            <CardContent className="p-8 md:flex md:items-center md:justify-between md:gap-8">
                                <div className="md:w-1/2">
                                    <h3 className="text-lg font-semibold">Kualitas Terjaga</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Nikmati kualitas dan rasa yang konsisten tanpa khawatir perubahan cita rasa atau kualitas bahan baku.
                                    </p>
                                </div>
                                {/* Grafik placeholder */}
                                <div className="mt-6 h-48 w-full rounded-xl bg-gradient-to-t from-amber-100 to-amber-50 md:mt-0 md:w-1/2">
                                    <div className="flex h-full items-end justify-start p-4">
                                        <div className="h-16 w-1/5 rounded-md bg-amber-200"></div>
                                        <div className="mx-2 h-24 w-1/5 rounded-md bg-amber-300"></div>
                                        <div className="mx-2 h-32 w-1/5 rounded-md bg-amber-400"></div>
                                        <div className="mx-2 h-36 w-1/5 rounded-md bg-amber-500"></div>
                                        <div className="mx-2 h-40 w-1/5 rounded-md bg-amber-600"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Variants Section */}
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="rounded-3xl bg-white p-10 shadow-sm">
                        {/* Bagian atas: judul & deskripsi */}
                        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                            <div className="md:w-1/2">
                                <p className="text-sm font-medium tracking-wide text-primary uppercase">VARIAN SERENA COOKIES</p>
                                <h2 className="mt-2 font-black-mango text-3xl font-bold md:text-4xl">
                                    Nikmati Beragam Pilihan Kelezatan Setiap Gigitan
                                </h2>
                            </div>
                            <div className="text-gray-600 md:w-1/2">
                                <p>
                                    Setiap varian Serena Cookies dibuat dengan bahan pilihan dan resep istimewa, menghadirkan cita rasa yang berbeda
                                    untuk setiap selera. Temukan varian favoritmu di bawah ini.
                                </p>
                            </div>
                        </div>

                        <div className="my-8 h-px w-full bg-gray-200" />

                        {/* Daftar varian */}
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {variants.map((variant) => {
                                return (
                                    <div
                                        key={variant.id}
                                        className="flex flex-col items-center rounded-2xl bg-secondary p-6 text-center shadow transition-all"
                                    >
                                        <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">{variant.name}</h3>
                                        {/* Deskripsi varian */}
                                        {variant.description ? (
                                            <p className="mt-2 mb-2 text-sm text-gray-600">{variant.description}</p>
                                        ) : (
                                            <p className="mt-2 mb-2 text-sm text-gray-600 italic">Deskripsi belum tersedia</p>
                                        )}
                                        <p className="my-4 text-xs text-gray-600 italic">{variant.products_count} produk tersedia dari varian ini.</p>
                                        <Link href={`/products?variant=${variant.name.toLowerCase()}`}>
                                            <Button variant="outline">
                                                Lihat Produk
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hampers Info Section */}
            <section className="bg-primary py-16">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white">
                                <Gift className="h-4 w-4" />
                                Paket Hampers
                            </div>
                            <h2 className="font-black-mango text-3xl font-bold text-secondary md:text-4xl">Hadiah Sempurna untuk Orang Terkasih</h2>
                            <p className="text-lg text-muted/80">
                                Kami menyediakan paket hampers eksklusif yang cocok untuk berbagai momen spesial Anda. Setiap paket dikemas dengan
                                indah dan penuh cinta.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="rounded-full bg-amber-600 p-2">
                                        <Package className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Kemasan Premium dengan Toples Berkualitas</h4>
                                        <p className="text-sm text-muted/80">Toples yang cantik dan dapat digunakan kembali</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="rounded-full bg-amber-600 p-2">
                                        <Gift className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Bonus Greeting Card</h4>
                                        <p className="text-sm text-muted/80">Kartu ucapan spesial untuk momen istimewa Anda</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="rounded-full bg-amber-600 p-2">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Paket Dapat Disesuaikan</h4>
                                        <p className="text-sm text-muted/80">Pilih varian sesuai selera dan kebutuhan Anda</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Link href="/hampers">
                                    <Button size="lg" variant="outline" className="gap-2">
                                        Lihat Paket Hampers
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square overflow-hidden rounded-3xl bg-white/50 shadow-2xl dark:bg-black/20">
                                <div className="flex h-full items-center justify-center p-8">
                                    <Gift className="h-64 w-64 text-amber-600/20 dark:text-amber-400/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="bg-gradient-to-b from-secondary to-amber-50 py-20">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-black-mango text-3xl font-bold md:text-4xl">Kunjungi Toko Kami</h2>
                        <p className="text-lg text-muted-foreground">Temukan lokasi toko kami dan belanja langsung kue kering favorit Anda</p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900/30">
                                            <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                                        </div>
                                        <h3 className="font-black-mango text-xl font-semibold">Alamat Toko</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-medium">Serena Cookies</p>
                                            <p className="text-sm text-muted-foreground">
                                                Perumahan BPTP Blok B-7, Jl. Atletik, Kepuharjo, Kec. Karangploso, Kabupaten Malang, Jawa Timur
                                            </p>
                                        </div>
                                        <div className="pt-4">
                                            <h4 className="mb-2 font-medium">Jam Operasional:</h4>
                                            <div className="space-y-1 text-sm text-muted-foreground">
                                                <p>Senin - Jumat: 08.00 - 20.00 WIB</p>
                                                <p>Sabtu - Minggu: 08.00 - 21.00 WIB</p>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <h4 className="mb-2 font-medium">Kontak:</h4>
                                            <div className="space-y-1 text-sm text-muted-foreground">
                                                <p>
                                                    WhatsApp:{' '}
                                                    <a
                                                        href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-primary"
                                                        aria-label="Chat WhatsApp"
                                                    >
                                                        +62 856-4979-6210
                                                    </a>
                                                </p>
                                                <p>
                                                    Instagram:{' '}
                                                    <a
                                                        href="https://www.instagram.com/serenacookiesmalang/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-primary"
                                                    >
                                                        @serenacookiesmalang
                                                    </a>
                                                </p>
                                                <p>
                                                    Facebook:{' '}
                                                    <a
                                                        href="https://www.facebook.com/cookiesserena"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-primary"
                                                    >
                                                        Serena Cookies Malang
                                                    </a>
                                                </p>
                                                <p>
                                                    Tiktok:{' '}
                                                    <a
                                                        href="https://www.tiktok.com/@serenacookiesmalang"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-primary"
                                                    >
                                                        @serenacookiesmalang
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="min-h-[400px] overflow-hidden rounded-xl border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5748392856445!2d112.60644931477624!3d-7.915891994300729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78810a1b8b8b8b%3A0x1b8b8b8b8b8b8b8b!2sKepuharjo%2C%20Karangploso%2C%20Malang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Float Button */}
            <a
                href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110 hover:bg-green-600"
                aria-label="Chat WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </UserLayout>
    );
}
