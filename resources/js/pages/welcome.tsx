import BaseLayout from "@/layouts/base-layout";
import Carroussel from "@/pages/Carroussel"; 
import Portfolio from "@/pages/Portfolio";
import Appreciation from "@/pages/AppreciationCard";



export default function Welcome() {

    return (
        <BaseLayout>
            
            <div><Carroussel/></div>
            <div><Portfolio/></div>
            <div><Appreciation/></div>
            

        </BaseLayout>
    );
}
