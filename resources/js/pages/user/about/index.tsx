import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Clock, Cookie, Gift, Sparkles, Target } from 'lucide-react';

export default function About() {
    return (
        <UserLayout>
            <Head title="Tentang Serena Cookies" />

            {/* Hero */}
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
                            <Cookie className="h-4 w-4" />
                            Cerita Serena Cookies
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
                                Tentang
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
                                Kami
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-base text-amber-100 md:text-lg"
                        >
                            Dari dapur rumahan sampai ke momen spesial keluarga — Serena Cookies lahir dari kecintaan pada kue kering berkualitas,
                            resep turun-temurun, dan bahan pilihan yang menghadirkan kebahagiaan di setiap gigitan.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-amber-50 py-12 md:py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-medium tracking-wide text-primary uppercase">Tentang Kami</p>
                        <h2 className="mt-2 font-black-mango text-3xl font-bold md:text-4xl">Visi, Misi & Nilai</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                            <div className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="relative z-10 p-6 text-center">
                                <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                    <Sparkles className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Visi</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Menjadi pilihan utama kue kering berkualitas yang menghadirkan kebahagiaan pada setiap momen keluarga.
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                            <div className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="relative z-10 p-6 text-center">
                                <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                    <Target className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Misi</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Mengolah bahan terbaik dengan resep istimewa, menjaga kualitas dan konsistensi agar pelanggan selalu puas.
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                            <div className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="relative z-10 p-6 text-center">
                                <div className="mx-auto mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                                    <Gift className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Nilai Kami</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Kejujuran, kehangatan, dan kreativitas — setiap produk dibuat dengan ketulusan untuk pelanggan tercinta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-amber-50 py-12 md:py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-medium tracking-wide text-primary uppercase">Kenapa Memilih Kami</p>
                        <h2 className="mt-2 font-black-mango text-3xl font-bold md:text-4xl">Mengapa Banyak yang Memilih Serena Cookies</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="p-8">
                                <h3 className="font-black-mango text-5xl font-bold text-primary">3.000+</h3>
                                <p className="mt-3 text-lg font-semibold">Pelanggan Setia</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Lebih dari 3.000 pelanggan telah mempercayakan momen spesial mereka bersama Serena Cookies.
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="z-20 flex flex-col gap-4 p-8">
                                <div className="flex items-center gap-3">
                                    <Clock className="h-6 w-6 text-primary" />
                                    <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Pengiriman Cepat & Fleksibel</h3>
                                </div>
                                <p className="z-40 text-sm text-muted-foreground">
                                    Pesanan dapat dikirim kapan saja sesuai kebutuhan Anda, dengan kemasan tetap aman dan rapi.
                                </p>
                            </div>
                            <div className="absolute right-2 -bottom-24 md:-bottom-18 lg:right-12">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-secondary-foreground/30 blur-3xl" />
                                    <img
                                        src="/assets/images/rocket.png"
                                        alt="Pengiriman Cepat"
                                        className="relative h-44 text-primary drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm">
                            <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-secondary-foreground/30 blur-3xl" aria-hidden />
                            <div className="absolute -top-24 left-2/3 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                            <div className="relative p-8">
                                <div className="space-y-4 md:w-1/2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-black-mango text-xl font-semibold text-primary md:text-2xl">Kualitas Terjaga</h3>
                                        <Sparkles className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="mt-2 mb-8 text-sm text-muted-foreground lg:mb-20">
                                        Nikmati kualitas dan cita rasa yang konsisten. Kami menggunakan bahan pilihan serta proses produksi yang
                                        terstandarisasi. Komitmen ini menjamin setiap toples Serena Cookies selalu menghadirkan kenikmatan yang sama,
                                        baik untuk keseharian maupun momen spesial bersama keluarga.
                                    </p>
                                </div>
                                <img
                                    src="/assets/images/about.jpg"
                                    alt="Kualitas Terjaga"
                                    className="right-16 bottom-0 w-[420px] rounded-2xl lg:absolute lg:rounded-t-2xl lg:rounded-b-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
