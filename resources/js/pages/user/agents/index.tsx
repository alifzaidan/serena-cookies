import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Check, MapPin, Phone, ShoppingBag, Sparkles, Store, Users } from 'lucide-react';

interface Agent {
    id: string;
    name: string;
    address: string;
    phone: string;
    created_at: string;
}

interface AgentsProps {
    agents: Agent[];
}

export default function Agents({ agents }: AgentsProps) {
    return (
        <UserLayout>
            <Head title="Agen & Reseller - Serena Cookies" />

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
                            <Users className="h-4 w-4" />
                            Kemitraan Bisnis
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
                                Agen
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
                                & Reseller
                            </TextEffect>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-4 max-w-2xl text-base font-medium text-amber-50 md:text-lg"
                        >
                            Bergabunglah dengan kami dan dapatkan keuntungan menarik sebagai mitra bisnis Serena Cookies
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
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
                <div className="container mx-auto max-w-6xl px-4">
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
                            Program Kemitraan
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                        >
                            Ketentuan{' '}
                            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Agen & Reseller</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
                        >
                            Kami memberikan kesempatan untuk menjadi agen atau reseller produk Serena Cookies dengan berbagai keuntungan menarik
                        </motion.p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Agen Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group relative overflow-hidden rounded-3xl bg-primary shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className="absolute -top-24 -right-12 h-56 w-56 rounded-full bg-secondary/40 blur-3xl transition-all duration-300 group-hover:bg-secondary/60"
                                aria-hidden
                            />
                            <div
                                className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-amber-50/40 blur-3xl transition-all duration-300 group-hover:bg-amber-50/60"
                                aria-hidden
                            />

                            <div className="relative z-10 flex h-full flex-col p-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary shadow-lg transition-all duration-300 group-hover:scale-110 md:h-14 md:w-14"
                                >
                                    <Store className="h-6 w-6 text-primary" />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="font-black-mango text-2xl font-bold text-secondary md:text-3xl"
                                >
                                    Agen
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-3 text-sm text-secondary/80"
                                >
                                    Program kemitraan untuk pembelian dalam jumlah besar
                                </motion.p>

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="my-8 h-px w-full origin-left bg-secondary/20"
                                />

                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-start gap-3 rounded-xl bg-secondary/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/20"
                                    >
                                        <div className="mt-1 rounded-full bg-secondary/90 p-1 shadow-sm">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-secondary">Pembelian Minimum</p>
                                            <p className="text-sm text-secondary/80">50 lusin (600 toples)</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-start gap-3 rounded-xl bg-secondary/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/20"
                                    >
                                        <div className="mt-1 rounded-full bg-secondary/90 p-1 shadow-sm">
                                            <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-secondary">Diskon Spesial</p>
                                            <p className="text-sm text-secondary/80">15% untuk setiap pembelian</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-8 md:mt-auto"
                                >
                                    <a
                                        href="https://wa.me/6285649796210?text=Halo%2C%20saya%20tertarik%20menjadi%20Agen%20Serena%20Cookies."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            size="lg"
                                            variant="secondary"
                                            className="w-full gap-2 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                                        >
                                            <Phone className="h-5 w-5" />
                                            Hubungi Kami
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Reseller Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group relative overflow-hidden rounded-3xl bg-secondary shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className="absolute -top-24 -right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-all duration-300 group-hover:bg-primary/30"
                                aria-hidden
                            />
                            <div
                                className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-secondary-foreground/20 blur-3xl transition-all duration-300 group-hover:bg-secondary-foreground/30"
                                aria-hidden
                            />

                            <div className="relative z-10 p-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg transition-all duration-300 group-hover:scale-110 md:h-14 md:w-14"
                                >
                                    <ShoppingBag className="h-6 w-6 text-secondary" />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="font-black-mango text-2xl font-bold text-primary md:text-3xl"
                                >
                                    Reseller
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-3 text-sm text-muted-foreground"
                                >
                                    Program kemitraan dengan sistem diskon bertingkat
                                </motion.p>

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="my-8 h-px w-full origin-left bg-border"
                                />

                                <div className="space-y-3">
                                    {[
                                        { range: '36 - 60 toples', discount: '6%' },
                                        { range: '60 - 120 toples', discount: '7%' },
                                        { range: '120 - 240 toples', discount: '8%' },
                                        { range: '240 - 360 toples', discount: '9%' },
                                        { range: 'Diatas 360 toples', discount: '10%' },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            className="group/item flex items-center justify-between rounded-xl bg-primary/5 p-3 transition-all duration-300 hover:bg-primary/10 hover:shadow-md dark:bg-gray-900"
                                        >
                                            <span className="text-sm font-medium transition-colors duration-200 group-hover/item:text-primary">
                                                {item.range}
                                            </span>
                                            <motion.span
                                                whileHover={{ scale: 1.1 }}
                                                className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-secondary shadow-sm transition-all duration-200 group-hover/item:shadow-md"
                                            >
                                                {item.discount}
                                            </motion.span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-8"
                                >
                                    <a
                                        href="https://wa.me/6285649796210?text=Halo%2C%20saya%20tertarik%20menjadi%20Reseller%20Serena%20Cookies."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full gap-2 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                                        >
                                            <Phone className="h-5 w-5" />
                                            Hubungi Kami
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Agents List Section */}
            {agents.length > 0 && (
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
                                Daftar Agen Resmi
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-2 font-black-mango text-3xl font-bold md:text-4xl"
                            >
                                Agen <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Serena Cookies</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mx-auto mt-4 max-w-2xl text-muted-foreground"
                            >
                                Temukan agen resmi Serena Cookies terdekat di kota Anda
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {agents.map((agent, index) => (
                                <motion.a
                                    key={agent.id}
                                    href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Serena%20Cookies.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                                    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-all duration-300 group-hover:bg-amber-500/20" />

                                    <div className="relative z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1, type: 'spring' }}
                                            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg"
                                        >
                                            <Store className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                                        </motion.div>

                                        <h3 className="font-black-mango text-base font-bold text-primary transition-colors duration-300 group-hover:scale-105 md:text-xl">
                                            {agent.name}
                                        </h3>

                                        <div className="mt-2 space-y-2 md:mt-4">
                                            <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-2 transition-colors duration-300 group-hover:bg-primary/10">
                                                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                                                <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                                                    {agent.phone}
                                                </span>
                                            </div>

                                            {agent.address && (
                                                <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-2 transition-colors duration-300 group-hover:bg-primary/10">
                                                    <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                                                    <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                                                        {agent.address}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.a>
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
                        Peluang Bisnis Menarik
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-black-mango text-3xl font-bold text-secondary md:text-4xl"
                    >
                        Tertarik Bergabung?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mx-auto mt-4 max-w-2xl text-secondary/80"
                    >
                        Hubungi kami sekarang untuk informasi lebih lanjut tentang program kemitraan Serena Cookies
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
                    >
                        <a
                            href="https://wa.me/6285649796210?text=Halo%2C%20saya%20ingin%20informasi%20lebih%20lanjut%20tentang%20program%20kemitraan%20Serena%20Cookies."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="secondary"
                                className="gap-2 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                            >
                                <Phone className="h-5 w-5" />
                                Hubungi Via WhatsApp
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </UserLayout>
    );
}
