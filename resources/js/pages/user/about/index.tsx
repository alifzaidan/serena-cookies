import { Card, CardContent } from '@/components/ui/card';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Cookie, Gift, Sparkles, Target } from 'lucide-react';

export default function About() {
    return (
        <UserLayout>
            <Head title="Tentang Serena Cookies" />

            {/* Hero */}
            <section className="relative bg-gradient-to-b from-amber-50 to-secondary">
                <div className="container mx-auto max-w-7xl px-4 pt-20 pb-10 md:pt-32 md:pb-16">
                    <div className="space-y-4 text-center md:space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-medium text-amber-900 md:text-sm"
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
                                Tentang
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
                                Kami
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
                        >
                            Dari dapur rumahan sampai ke momen spesial keluarga — Serena Cookies lahir dari kecintaan pada kue kering berkualitas,
                            resep turun-temurun, dan bahan pilihan yang menghadirkan kebahagiaan di setiap gigitan.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-gradient-to-b from-secondary to-amber-50 py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-medium tracking-wide text-primary uppercase">Tentang Kami</p>
                        <h2 className="mt-2 font-black-mango text-3xl font-bold md:text-4xl">Visi, Misi & Nilai</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="rounded-3xl">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                                    <Sparkles className="h-6 w-6 text-amber-600" />
                                </div>
                                <h3 className="text-lg font-semibold">Visi</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Menjadi pilihan utama kue kering berkualitas yang menghadirkan kebahagiaan pada setiap momen keluarga.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                                    <Target className="h-6 w-6 text-amber-600" />
                                </div>
                                <h3 className="text-lg font-semibold">Misi</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Mengolah bahan terbaik dengan resep istimewa, menjaga kualitas dan konsistensi agar pelanggan selalu puas.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                                    <Gift className="h-6 w-6 text-amber-600" />
                                </div>
                                <h3 className="text-lg font-semibold">Nilai Kami</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Kejujuran, kehangatan, dan kreativitas — setiap produk dibuat dengan ketulusan untuk pelanggan tercinta.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
