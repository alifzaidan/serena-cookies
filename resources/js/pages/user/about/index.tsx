import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Award, Cookie, Heart, Sparkles, Target, Users } from 'lucide-react';

export default function About() {
    return (
        <UserLayout>
            <Head title="Tentang Serena Cookies" />

            {/* Hero */}
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
                            <Cookie className="h-4 w-4" />
                            Cerita Serena Cookies
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
                            className="mx-auto mt-4 max-w-2xl text-base font-medium text-amber-50 md:text-lg"
                        >
                            Dari dapur rumahan sampai ke momen spesial keluarga — Serena Cookies lahir dari kecintaan pada kue kering berkualitas,
                            resep turun-temurun, dan bahan pilihan yang menghadirkan kebahagiaan di setiap gigitan.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative bg-gradient-to-b from-amber-50 to-secondary py-12 md:py-16">
                <div
                    className="absolute inset-x-0 top-0 h-36 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: "url('/assets/images/pattern.jpg')",
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                    }}
                    aria-hidden
                />
                <div className="container mx-auto max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm font-medium tracking-wide text-primary uppercase"
                        >
                            Cerita Kami
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                        >
                            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Serena Cookies</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mx-auto mt-4 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-primary to-amber-600"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-6 text-justify text-base text-muted-foreground md:text-center md:text-lg"
                        >
                            Serena Cookies menyediakan berbagai macam cookies yang diproduksi secara{' '}
                            <span className="font-semibold text-primary">homemade</span>. Kami menciptakan kue kering dari bahan-bahan dengan{' '}
                            <span className="font-semibold text-primary">mutu terbaik, berkualitas, higienis dan tanpa pengawet</span>. Sekali mencoba
                            pasti langsung suka. Seiring dengan banyaknya permintaan, maka kami juga memproduksi pie susu serena. Dan nama kami
                            berganti dengan <span className="font-semibold text-primary">serenakue</span>.
                        </motion.p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 grid gap-6 sm:grid-cols-3"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7, type: 'spring' }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <Users className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                                </div>
                                <h3 className="font-black-mango text-3xl font-bold text-primary">3.000+</h3>
                                <p className="mt-1 text-sm font-medium text-muted-foreground">Pelanggan Setia</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <Cookie className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                                </div>
                                <h3 className="font-black-mango text-3xl font-bold text-primary">20+</h3>
                                <p className="mt-1 text-sm font-medium text-muted-foreground">Varian Produk</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                    <Award className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                                </div>
                                <h3 className="font-black-mango text-3xl font-bold text-primary">100%</h3>
                                <p className="mt-1 text-sm font-medium text-muted-foreground">Bahan Premium</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-gradient-to-b from-secondary to-amber-50 pt-10 pb-12 md:pb-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm font-medium tracking-wide text-primary uppercase"
                        >
                            Tentang Kami
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                        >
                            Visi, Misi & <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Nilai</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mx-auto mt-4 h-1 w-24 origin-center rounded-full bg-gradient-to-r from-primary to-amber-600"
                        />
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:bg-primary/30"
                                aria-hidden
                            />
                            <div
                                className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl transition-all duration-300 group-hover:bg-amber-500/30"
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10 p-6 text-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                                    className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                                >
                                    <Sparkles className="h-8 w-8 text-secondary" />
                                </motion.div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                    Visi
                                </h3>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="mx-auto my-4 h-px w-16 origin-center bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary"
                                />
                                <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-700">
                                    Menjadi pilihan utama kue kering berkualitas yang menghadirkan kebahagiaan pada setiap momen keluarga.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:bg-primary/30"
                                aria-hidden
                            />
                            <div
                                className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl transition-all duration-300 group-hover:bg-amber-500/30"
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10 p-6 text-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                                    className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                                >
                                    <Target className="h-8 w-8 text-secondary" />
                                </motion.div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                    Misi
                                </h3>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="mx-auto my-4 h-px w-16 origin-center bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary"
                                />
                                <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-700">
                                    Mengolah bahan terbaik dengan resep istimewa, menjaga kualitas dan konsistensi agar pelanggan selalu puas.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:bg-primary/30"
                                aria-hidden
                            />
                            <div
                                className="absolute -right-12 -bottom-24 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl transition-all duration-300 group-hover:bg-amber-500/30"
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10 p-6 text-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                                    className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                                >
                                    <Heart className="h-8 w-8 text-secondary" />
                                </motion.div>
                                <h3 className="font-black-mango text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                    Nilai Kami
                                </h3>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="mx-auto my-4 h-px w-16 origin-center bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:bg-primary"
                                />
                                <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-gray-700">
                                    Kejujuran, kehangatan, dan kreativitas — setiap produk dibuat dengan ketulusan untuk pelanggan tercinta.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
