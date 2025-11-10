import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, MessageCircle, Package, Sparkles } from 'lucide-react';

interface Catalog {
    id: string;
    title: string;
    description?: string;
    image?: string;
}

interface CatalogProps {
    catalogs: Catalog[];
}

export default function Catalog({ catalogs }: CatalogProps) {
    return (
        <UserLayout>
            <Head title="Harga & Katalog - Serena Cookies" />

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
                            <BookOpen className="h-4 w-4" />
                            Katalog Produk
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
                                Harga
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
                                & Katalog
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-base text-amber-100 md:text-lg"
                        >
                            Jelajahi katalog lengkap produk kami dengan berbagai varian dan paket hampers eksklusif untuk momen spesial Anda
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Catalogs Section */}
            {catalogs.length > 0 && (
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
                                Katalog Serena Cookies
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                            >
                                Katalog <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Produk Kami</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mx-auto mt-4 max-w-2xl text-muted-foreground"
                            >
                                Lihat katalog lengkap produk kami untuk informasi detail tentang varian dan harga
                            </motion.p>
                        </motion.div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {catalogs.map((catalog, index) => (
                                <motion.div
                                    key={catalog.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl bg-secondary shadow-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

                                    {/* Image */}
                                    {catalog.image && (
                                        <div className="relative overflow-hidden rounded-t-2xl">
                                            <img
                                                src={`/storage/${catalog.image}`}
                                                alt={catalog.title}
                                                className="h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10 p-6">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: 'spring' }}
                                            className="mb-4 hidden h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary md:inline-flex"
                                        >
                                            <Package className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-secondary" />
                                        </motion.div>
                                        <h3 className="font-black-mango text-lg font-bold text-primary transition-all duration-300 group-hover:scale-105 md:text-xl">
                                            {catalog.title}
                                        </h3>
                                        {catalog.description && (
                                            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-700">
                                                {catalog.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
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
