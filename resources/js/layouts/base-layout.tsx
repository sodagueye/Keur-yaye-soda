import React, { ReactNode, useState } from 'react';
import { Link } from "@inertiajs/react";
import { Icon } from '@/components/icon';
import { Home, Info, Calendar, LogIn, ShoppingCart, Menu, X, UtensilsCrossed, Facebook, MessageCircle } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

type BaseLayoutProps = {
    children: ReactNode;
};

const navItems = [
    { href: "/", icon: Home, text: "Accueil" },
    { href: "/menu", icon: UtensilsCrossed, text: "Menu" },
    { href: "/about", icon: Info, text: "A propos" },
    { href: "/reservation", icon: Calendar, text: "Resevation" },
    { href: "/login", icon: LogIn, text: "Connexion" },
    { href: "/cart", icon: ShoppingCart, text: "Panier" },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <span className="font-bold text-xl text-[#91725D]">Keur Yaay Soda</span>

                    {/* Mobile Menu */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-[#91725D]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[#91725D]" />
                            )}
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[360px] border-r-[#91725D]">
                            <SheetHeader className="border-b pb-4">
                                <SheetTitle className="text-[#91725D] text-2xl font-bold">Keur Yaay Soda</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col items-center gap-4 mt-8">
                                {navItems.map(({ href, icon, text }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="w-[90%] flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-[#91725D]/10 rounded-lg transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon iconNode={icon} className="h-5 w-5 text-[#91725D]" />
                                        <span className="font-medium">{text}</span>
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>

                    <NavigationMenu className="hidden lg:block flex-1">
                        <NavigationMenuList className="flex items-center justify-center gap-4 ml-8 lg:ml-32">
                            {navItems.map(({ href, icon, text }) => (
                                <NavigationMenuItem key={href}>
                                    <Link
                                        href={href}
                                        className={navigationMenuTriggerStyle() + " text-black hover:text-[#91725D] flex items-center gap-2"}
                                    >
                                        <Icon iconNode={icon} className="h-5 w-5 text-[#91725D]" />
                                        {text}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-[#0B1118]/90 text-white mt-auto relative">
        <div className="absolute inset-0 overflow-hidden">
            <img src="/images/footer_img.png" alt="Footer Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/logo_white.png"
                        alt="Logo"
                        className="w-[150px] h-[70px] object-cover"
                    />
                </div>

                {/* Legal Information Section */}
                <div className="flex flex-col items-center">
                    <h6 className="uppercase font-semibold mb-4">Informations Legales</h6>
                    <ul className="space-y-2">
                        <li><Link href="/conditions-utilisation" className="text-white hover:text-[#91725D]">Conditions d'utilisation</Link></li>
                        <li><Link href="/politique-de-confidentialite" className="text-white hover:text-[#91725D]">Politique de confidentialité</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col items-center">
                    <h6 className="uppercase font-semibold mb-4">Contact</h6>
                    <ul className="space-y-2">
                        <li><Link href="/Contact" className="text-white hover:text-[#91725D]">Nous contacter</Link></li>
                        <li><Link href="/Localisation" className="text-white hover:text-[#91725D]">Localisation</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center">
                    <h6 className="uppercase font-semibold mb-4">Retrouvez-nous sur</h6>
                    <div className="flex gap-3">
                        <a href="https://chat.whatsapp.com/LvHkLHkFx8V6JgjuXSqXQ5" target="_blank" className="hover:text-[#91725D]">
                            <Icon iconNode={MessageCircle} className="w-6 h-6" />
                        </a>
                        <a href="https://www.tiktok.com/@nom_utilisateur" target="_blank" className="hover:text-[#91725D]">
                            <Icon iconNode={Facebook} className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com/nom_utilisateur" target="_blank" className="hover:text-[#91725D]">
                            <Icon iconNode={Facebook} className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/nom_utilisateur" target="_blank" className="hover:text-[#91725D]">
                            <Icon iconNode={Facebook} className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white pt-3 mt-8">
                <h5 className="text-center text-xl mb-2">Tiens-toi à jour</h5>
                <p className="text-center text-gray-400 mb-4">Abonnez-vous à notre newsletter</p>
                <div className="max-w-md mx-auto flex gap-2">
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="flex-1 px-4 py-2 rounded-full bg-white text-black"
                        name="email"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-full bg-[#91725D] text-white hover:bg-[#91725D]/90 border-0"
                    >
                        Abonnez-vous
                    </button>
                </div>
            </div>
        </div>
    </footer>
);

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, maxWidth: 1200, margin: '2rem auto', width: '100%' }}>
            {children}
        </main>
        <Footer />
    </div>
);

export default BaseLayout;
