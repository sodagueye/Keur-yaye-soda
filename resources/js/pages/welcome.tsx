import BaseLayout from "@/layouts/base-layout";
import Carroussel from "@/pages/Carroussel";
import Portfolio from "@/pages/Portfolio";
import Appreciation from "@/pages/AppreciationCard";
import ProductsPreview from "@/components/ProductsPreview"; 
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { produits = [] } = usePage().props; // Défaut tableau vide


    return (
        <BaseLayout>
            <div><Carroussel /></div>
            <ProductsPreview produits={produits} />
            <div><Portfolio /></div>
            <div><Appreciation /></div>
        </BaseLayout>
    );
}
