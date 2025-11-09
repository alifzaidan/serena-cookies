import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Gift, MapPin, Package, ShoppingBag, Sparkles } from 'lucide-react';

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

interface Hamper {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
}

interface HomeProps {
    all_products: Product[];
    variants: Variant[];
    hampers: Hamper[];
}

export default function Home({ variants, hampers }: HomeProps) {
    return (
        <UserLayout>
            <Head title="Serena Cookies - Kue Kering Berkualitas Premium" />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/all-variant.jpg')" }}>
                <div className="absolute inset-0 bg-primary/70" aria-hidden />
                <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="space-y-4 text-center text-white md:space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-amber-900 md:text-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Kue Kering Premium
                        </motion.div>

                        <div className="flex justify-center gap-1.5 font-black-mango text-4xl font-bold tracking-tight sm:text-5xl md:gap-3 md:text-6xl lg:text-7xl">
                            <TextEffect
                                per="char"
                                delay={0.5}
                                variants={{
                                    container: {
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.05 },
                                        },
                                    },
                                    item: {
                                        hidden: { opacity: 0, rotateX: 90, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            rotateX: 0,
                                            y: 0,
                                            transition: { duration: 0.2 },
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
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.05 },
                                        },
                                    },
                                    item: {
                                        hidden: { opacity: 0, rotateX: 90, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            rotateX: 0,
                                            y: 0,
                                            transition: { duration: 0.2 },
                                        },
                                    },
                                }}
                                className="text-amber-200"
                            >
                                Cookies
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-base text-amber-100 md:text-lg"
                        >
                            Kue kering berkualitas premium dengan cita rasa istimewa. Dibuat dengan bahan pilihan terbaik untuk kebahagiaan keluarga
                            Anda.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="flex w-full flex-col justify-center gap-3 sm:flex-row"
                        >
                            <Button size="lg" variant="secondary" className="gap-2" asChild>
                                <a
                                    href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ShoppingBag className="h-5 w-5" />
                                    Pesan Sekarang
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/catalogs" className="gap-2">
                                    Lihat Katalog
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-gradient-to-b from-amber-50 to-secondary py-12">
                <div className="container mx-auto mb-4 max-w-7xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary md:text-sm"
                    >
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        Produk Terlaris & Terfavorit
                        <Sparkles className="h-4 w-4 animate-pulse" />
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative inline-block"
                        >
                            <h2 className="font-black-mango text-3xl font-bold md:text-2xl lg:text-4xl">
                                <span className="bg-gradient-to-r from-primary via-amber-600 to-primary bg-clip-text text-transparent">
                                    Hampers Premium
                                </span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="relative"
                                >
                                    Untuk Momen Istimewa
                                </motion.span>
                            </h2>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative"
                >
                    <InfiniteSlider gap={24} className="py-8" speed={30}>
                        {hampers.map((hamper, index) => (
                            <motion.div
                                key={hamper.id}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                    ease: 'easeOut',
                                }}
                                className="group relative w-[320px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {hamper.image ? (
                                        <>
                                            <motion.img
                                                initial={{ scale: 1.2, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                                src={`/storage/${hamper.image}`}
                                                alt={hamper.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                            <Gift className="h-20 w-20 text-primary/30" />
                                        </div>
                                    )}
                                </div>

                                <div className="relative p-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="mb-4"
                                    >
                                        <h3 className="line-clamp-2 font-black-mango text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary">
                                            {hamper.name}
                                        </h3>
                                        {hamper.description && <p className="mt-2 line-clamp-2 text-sm text-gray-600">{hamper.description}</p>}
                                    </motion.div>

                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="mb-4 h-px origin-left bg-gray-200"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    >
                                        <a
                                            href={`https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20hampers%20${encodeURIComponent(hamper.name)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="w-full gap-2 bg-primary transition-all duration-200 group-hover:shadow-lg hover:bg-primary/90">
                                                <ShoppingBag className="h-4 w-4" />
                                                Pesan Sekarang
                                            </Button>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />
                                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/30 blur-2xl transition-all duration-300 group-hover:bg-secondary/50" />
                            </motion.div>
                        ))}
                    </InfiniteSlider>
                </motion.div>

                <div className="container mx-auto max-w-7xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex justify-center"
                    >
                        <Link href="/hampers">
                            <Button size="lg" variant="default" className="gap-2 shadow-lg transition-all duration-200 hover:shadow-xl">
                                Lihat Semua Hampers
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-b from-secondary to-muted/30 py-12">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm font-medium tracking-wide text-primary uppercase"
                        >
                            Kenapa Memilih Kami
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                        >
                            Mengapa Banyak yang Memilih Serena Cookies
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm"
                        >
                            <div className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="p-8"
                            >
                                <motion.h3
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
                                    className="font-black-mango text-5xl font-bold text-primary"
                                >
                                    3.000+
                                </motion.h3>
                                <p className="mt-3 text-lg font-semibold">Pelanggan Setia</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Lebih dari 3.000 pelanggan telah mempercayakan momen spesial mereka bersama Serena Cookies.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="z-20 flex flex-col gap-4 p-8"
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        initial={{ rotate: -180, scale: 0 }}
                                        whileInView={{ rotate: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                                    >
                                        <Clock className="h-6 w-6 text-primary" />
                                    </motion.div>
                                    <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Pengiriman Cepat & Fleksibel</h3>
                                </div>
                                <p className="z-40 text-sm text-muted-foreground">
                                    Pesanan dapat dikirim kapan saja sesuai kebutuhan Anda, dengan kemasan tetap aman dan rapi.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.7, type: 'spring' }}
                                className="absolute right-2 -bottom-24 md:-bottom-18 lg:right-12"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-secondary-foreground/30 blur-3xl" />
                                    <img
                                        src="/assets/images/rocket.png"
                                        alt="Pengiriman Cepat"
                                        className="relative h-44 text-primary drop-shadow-lg"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm"
                        >
                            <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="absolute -top-24 left-2/3 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                            <div className="relative p-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="space-y-4 md:w-1/2"
                                >
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Kualitas Terjaga</h3>
                                        <motion.div
                                            initial={{ rotate: -45, scale: 0 }}
                                            whileInView={{ rotate: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 200 }}
                                        >
                                            <Sparkles className="h-6 w-6 text-primary" />
                                        </motion.div>
                                    </div>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                        className="mt-2 mb-8 text-sm text-muted-foreground lg:mb-20"
                                    >
                                        Nikmati kualitas dan cita rasa yang konsisten. Kami menggunakan bahan pilihan serta proses produksi yang
                                        terstandarisasi. Komitmen ini menjamin setiap toples Serena Cookies selalu menghadirkan kenikmatan yang sama,
                                        baik untuk keseharian maupun momen spesial bersama keluarga.
                                    </motion.p>
                                </motion.div>
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.8 }}
                                    src="/assets/images/about.jpg"
                                    alt="Kualitas Terjaga"
                                    className="right-16 bottom-0 w-[420px] rounded-2xl lg:absolute lg:rounded-t-2xl lg:rounded-b-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Variants Section */}
            <section className="bg-gradient-to-b from-muted/30 to-secondary py-8 md:py-12">
                <div className="container mx-auto max-w-7xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl bg-white p-6 shadow-lg md:p-10"
                    >
                        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="md:w-1/2"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary md:text-sm"
                                >
                                    <Sparkles className="h-4 w-4" />
                                    VARIAN SERENA COOKIES
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-4 font-black-mango text-3xl font-bold md:text-4xl"
                                >
                                    Nikmati Beragam Pilihan{' '}
                                    <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Kelezatan</span> Setiap
                                    Gigitan
                                </motion.h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-gray-600 md:w-1/2"
                            >
                                <p>
                                    Setiap varian Serena Cookies dibuat dengan <span className="font-semibold text-primary">bahan pilihan</span> dan{' '}
                                    <span className="font-semibold text-primary">resep istimewa</span>, menghadirkan cita rasa yang berbeda untuk
                                    setiap selera. Temukan varian favoritmu di bawah ini.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="my-8 h-px w-full origin-left bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                        />

                        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
                            {variants.map((variant, index) => {
                                return (
                                    <Link key={variant.id} href={`/products?variant=${variant.name.toLowerCase()}`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5 + index * 0.1,
                                                ease: 'easeOut',
                                            }}
                                            className="group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-secondary p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                                                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary"
                                            >
                                                <Sparkles className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                                            </motion.div>

                                            <h3 className="font-black-mango text-xl font-semibold text-primary transition-all duration-300 group-hover:scale-105 group-hover:text-primary md:text-2xl">
                                                {variant.name}
                                            </h3>

                                            {variant.description ? (
                                                <p className="mt-2 mb-2 text-sm text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                                                    {variant.description}
                                                </p>
                                            ) : (
                                                <p className="mt-2 mb-2 text-sm text-gray-500 italic transition-colors duration-200 group-hover:text-gray-600">
                                                    Deskripsi belum tersedia
                                                </p>
                                            )}

                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                                className="my-4 h-px w-16 origin-center bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary"
                                            />

                                            <p className="mb-4 text-xs text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                                                <span className="font-semibold">{variant.products_count}</span> produk tersedia
                                            </p>

                                            <div className="mt-auto flex justify-center">
                                                <Button
                                                    variant="outline"
                                                    className="gap-2 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg"
                                                >
                                                    Lihat Produk
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Button>
                                            </div>

                                            {/* Decorative blur circles */}
                                            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                                            <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition-all duration-300 group-hover:bg-amber-500/20" />
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 text-center"
                        >
                            <p className="mb-4 text-sm text-gray-600">Lihat berbagai varian lainnya yang kami tawarkan</p>
                            <Link href="/products">
                                <Button size="lg" className="gap-2 shadow-lg transition-all duration-200 hover:shadow-xl">
                                    Lihat Semua Produk
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Hampers Info Section */}
            <section className="relative overflow-hidden bg-primary py-16">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
                    <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
                </div>

                <div className="relative container mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-center space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                                className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary-foreground px-4 py-2 text-sm font-medium text-white"
                            >
                                <Gift className="h-4 w-4" />
                                Paket Hampers
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="font-black-mango text-3xl font-bold text-secondary md:text-4xl"
                            >
                                Hadiah Sempurna untuk{' '}
                                <span className="relative inline-block">
                                    Orang Terkasih
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-secondary/50"
                                    />
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg text-amber-100"
                            >
                                Kami menyediakan paket hampers eksklusif yang cocok untuk berbagai momen spesial Anda. Setiap paket dikemas dengan
                                indah dan penuh cinta.
                            </motion.p>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="flex items-start gap-3 rounded-2xl bg-secondary-foreground/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-secondary-foreground/20"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                                        className="rounded-full bg-secondary p-2"
                                    >
                                        <Package className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Kemasan Premium dengan Toples Berkualitas</h4>
                                        <p className="text-sm text-amber-100">Toples yang cantik dan dapat digunakan kembali</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex items-start gap-3 rounded-2xl bg-secondary-foreground/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-secondary-foreground/20"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.7, type: 'spring' }}
                                        className="rounded-full bg-secondary p-2"
                                    >
                                        <Gift className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Bonus Greeting Card</h4>
                                        <p className="text-sm text-amber-100">Kartu ucapan spesial untuk momen istimewa Anda</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="flex items-start gap-3 rounded-2xl bg-secondary-foreground/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-secondary-foreground/20"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
                                        className="rounded-full bg-secondary p-2"
                                    >
                                        <Sparkles className="h-5 w-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-secondary">Paket Dapat Disesuaikan</h4>
                                        <p className="text-sm text-amber-100">Pilih varian sesuai selera dan kebutuhan Anda</p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-2"
                            >
                                <Link href="/hampers">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="gap-2 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                                    >
                                        Lihat Paket Hampers
                                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/30 to-amber-500/20 blur-2xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, rotate: -2 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="relative overflow-hidden rounded-3xl border-4 border-secondary shadow-2xl"
                            >
                                <img src="/assets/images/hampers.jpg" alt="Paket Hampers Serena Cookies" className="h-full w-full object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
                                className="absolute -right-4 -bottom-4 rounded-2xl bg-secondary px-6 py-4 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-primary p-3">
                                        <Sparkles className="h-6 w-6 animate-pulse text-white" />
                                    </div>
                                    <div>
                                        <p className="font-black-mango text-2xl font-bold text-primary">100%</p>
                                        <p className="text-xs font-medium text-gray-700">Kepuasan</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-amber-50 py-20">
                {/* Decorative background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
                </div>

                <div className="relative container mx-auto max-w-7xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                        >
                            <MapPin className="h-4 w-4" />
                            LOKASI KAMI
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-4 font-black-mango text-3xl font-bold md:text-4xl"
                        >
                            Kunjungi <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Toko Kami</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-muted-foreground"
                        >
                            Temukan lokasi toko kami dan belanja langsung kue kering favorit Anda
                        </motion.p>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Decorative gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative p-6">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                                        className="mb-4 flex items-center gap-3"
                                    >
                                        <div className="rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="font-black-mango text-xl font-semibold">Alamat Toko</h3>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                        className="space-y-3"
                                    >
                                        <div className="rounded-2xl bg-amber-50 p-4 transition-all duration-300 hover:bg-amber-100/50">
                                            <p className="font-semibold text-primary">Serena Cookies</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Perumahan BPTP Blok B-7, Jl. Atletik, Kepuharjo, Kec. Karangploso, Kabupaten Malang, Jawa Timur
                                            </p>
                                        </div>

                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                            className="my-4 h-px w-full origin-left bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"
                                        />

                                        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-amber-50 p-4">
                                            <div className="mb-3 flex items-center gap-2">
                                                <Clock className="h-5 w-5 text-primary" />
                                                <h4 className="font-semibold">Jam Operasional</h4>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm">
                                                    <span className="font-medium text-gray-700">Senin - Jumat</span>
                                                    <span className="font-semibold text-primary">08.00 - 20.00 WIB</span>
                                                </div>
                                                <div className="flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm">
                                                    <span className="font-medium text-gray-700">Sabtu - Minggu</span>
                                                    <span className="font-semibold text-primary">08.00 - 21.00 WIB</span>
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.9 }}
                                            className="my-4 h-px w-full origin-left bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"
                                        />

                                        <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-primary/5 p-4">
                                            <div className="mb-3 flex items-center gap-2">
                                                <Package className="h-5 w-5 text-primary" />
                                                <h4 className="font-semibold">Hubungi Kami</h4>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <a
                                                    href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-green-50 hover:shadow-md"
                                                >
                                                    <span className="font-medium text-gray-700">WhatsApp</span>
                                                    <span className="font-semibold text-primary transition-colors group-hover/link:text-green-600">
                                                        +62 856-4979-6210
                                                    </span>
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/serenacookiesmalang/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-pink-50 hover:shadow-md"
                                                >
                                                    <span className="font-medium text-gray-700">Instagram</span>
                                                    <span className="font-semibold text-primary transition-colors group-hover/link:text-pink-600">
                                                        @serenacookiesmalang
                                                    </span>
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/cookiesserena"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md"
                                                >
                                                    <span className="font-medium text-gray-700">Facebook</span>
                                                    <span className="font-semibold text-primary transition-colors group-hover/link:text-blue-600">
                                                        Serena Cookies Malang
                                                    </span>
                                                </a>
                                                <a
                                                    href="https://www.tiktok.com/@serenacookiesmalang"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link flex items-center justify-between rounded-lg bg-white/50 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
                                                >
                                                    <span className="font-medium text-gray-700">TikTok</span>
                                                    <span className="font-semibold text-primary transition-colors group-hover/link:text-gray-700">
                                                        @serenacookiesmalang
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Decorative blur circles */}
                                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-all duration-300 group-hover:bg-amber-500/20" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-center"
                            >
                                <a
                                    href="https://www.google.com/maps/dir//Perumahan+BPTP+Blok+B-7,+Jl.+Atletik,+Kepuharjo,+Kec.+Karangploso,+Kabupaten+Malang,+Jawa+Timur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="gap-2 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
                                        <MapPin className="h-5 w-5" />
                                        Buka di Google Maps
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="relative min-h-[500px]"
                        >
                            {/* Decorative frame */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-amber-500/20 blur-2xl"
                            />

                            {/* Map container */}
                            <motion.div
                                initial={{ opacity: 0, rotate: -1 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="relative h-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d553.2967313010594!2d112.62540980340901!3d-7.913166332428869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1761537989785!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '500px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1, type: 'spring' }}
                                className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-primary p-3">
                                        <MapPin className="h-6 w-6 animate-bounce text-white" />
                                    </div>
                                    <div>
                                        <p className="font-black-mango text-lg font-bold text-primary">Kunjungi Kami</p>
                                        <p className="text-xs font-medium text-gray-700">Malang, Jawa Timur</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
