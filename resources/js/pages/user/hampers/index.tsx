import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';

interface Hamper {
    id: string;
    name: string;
    description?: string;
    category: 'eid' | 'new_year';
    price: number;
    image?: string;
    is_favorite: boolean;
}

interface HamperProps {
    hampers: Hamper[];
}

export default function Hamper({ hampers }: HamperProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    // Filter hampers berdasarkan kategori
    const eidHampers = hampers.filter((hamper) => hamper.category === 'eid');
    const newYearHampers = hampers.filter((hamper) => hamper.category === 'new_year');

    const renderHamperCard = (hamper: Hamper, index: number) => (
        <motion.div
            key={hamper.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-secondary shadow-md transition-all duration-300 hover:shadow-xl"
        >
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                {hamper.image ? (
                    <img
                        src={`/storage/${hamper.image}`}
                        alt={hamper.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/5">
                        <Gift className="h-20 w-20 text-primary/30" />
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, scale: 0, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1, type: 'spring' }}
                    className="absolute top-3 left-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg"
                >
                    {hamper.category === 'eid' ? 'Idul Fitri' : 'Tahun Baru'}
                </motion.div>

                {hamper.is_favorite && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: 'spring' }}
                        className="absolute top-3 right-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-2 shadow-lg"
                    >
                        <Sparkles className="h-4 w-4 fill-white text-white" />
                    </motion.div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 font-black-mango text-xl font-bold text-primary transition-colors duration-300 group-hover:scale-105">
                        {hamper.name}
                    </h3>
                </div>

                {hamper.description && (
                    <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-700">
                        {hamper.description}
                    </p>
                )}

                <div className="mt-4 flex-1">
                    <div className="flex flex-col justify-between border-t border-border/50 pt-4 md:flex-row md:items-center">
                        <span className="text-xs font-medium text-muted-foreground">Harga Mulai</span>
                        <span className="font-black-mango text-xl font-bold text-primary">{formatPrice(hamper.price)}</span>
                    </div>
                </div>

                <div className="mt-4">
                    <a
                        href={`https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20Hampers%20${encodeURIComponent(hamper.name)}%20dari%20Serena%20Cookies.`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="sm"
                            className="w-full gap-2 transition-all duration-200 group-hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                        >
                            <ShoppingBag className="hidden h-4 w-4 sm:block" />
                            Pesan Sekarang
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    );

    return (
        <UserLayout>
            <Head title="Paket Hampers - Serena Cookies" />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/all-variant.jpg')" }}>
                <div className="absolute inset-0 bg-primary/50" aria-hidden />
                <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-32 pb-16 md:pt-40 md:pb-24">
                    <div className="space-y-4 text-center text-white md:space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-amber-900 shadow-lg backdrop-blur-sm md:text-sm"
                        >
                            <Gift className="h-4 w-4" />
                            Hampers Eksklusif
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-1.5 font-black-mango text-6xl font-bold tracking-tight drop-shadow-2xl md:gap-3 md:text-7xl">
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
                                Paket
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
                                Hampers
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-base font-medium text-amber-50 md:text-lg"
                        >
                            Berikan hadiah istimewa dengan paket hampers eksklusif kami, dikemas dengan cinta untuk momen spesial Anda
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Hampers Idul Fitri Section */}
            {eidHampers.length > 0 && (
                <section className="relative bg-gradient-to-b from-secondary to-amber-50 py-12 md:py-16">
                    <div
                        className="absolute inset-x-0 top-0 h-36 bg-cover bg-center opacity-50"
                        style={{
                            backgroundImage: "url('/assets/images/pattern.jpg')",
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                        }}
                        aria-hidden
                    />
                    <div className="container mx-auto max-w-7xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                                Katalog Ramadhan
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                            >
                                Paket Hampers{' '}
                                <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Idul Fitri 1446H</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mx-auto mt-4 max-w-2xl text-muted-foreground"
                            >
                                Hadiah sempurna untuk merayakan Idul Fitri dengan kemasan premium dan pilihan varian terbaik
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                            {eidHampers.map((hamper, index) => renderHamperCard(hamper, index))}
                        </div>
                    </div>
                </section>
            )}

            {/* Hampers Tahun Baru Section */}
            {newYearHampers.length > 0 && (
                <section className="bg-gradient-to-b from-amber-50 to-secondary py-12 md:py-16">
                    <div className="container mx-auto max-w-7xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                                Katalog Perayaan
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                            >
                                Paket Hampers{' '}
                                <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Tahun Baru</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mx-auto mt-4 max-w-2xl text-muted-foreground"
                            >
                                Sambut tahun baru dengan hampers spesial yang penuh kehangatan dan kebahagiaan
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                            {newYearHampers.map((hamper, index) => renderHamperCard(hamper, index))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-primary py-16">
                <div className="absolute -top-24 -right-12 h-56 w-56 rounded-full bg-secondary/40 blur-3xl" aria-hidden />
                <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-amber-50/40 blur-3xl" aria-hidden />

                <div className="relative container mx-auto max-w-4xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Siap Memesan?
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-black-mango text-3xl font-bold text-secondary md:text-4xl"
                    >
                        Siap Memesan Produk Favorit Anda?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mx-auto mt-4 max-w-2xl text-secondary/80"
                    >
                        Hubungi kami sekarang melalui WhatsApp untuk pemesanan dan konsultasi produk yang sesuai dengan kebutuhan Anda
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
                    >
                        <a
                            href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20memesan%20produk%20Serena%20Cookies."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="secondary"
                                className="gap-2 bg-green-200 text-green-800 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-green-200 hover:text-green-900 hover:shadow-xl"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Pesan Via WhatsApp
                            </Button>
                        </a>
                        <Link href="/products">
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 border-secondary shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                            >
                                Lihat Semua Produk
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </UserLayout>
    );
}
