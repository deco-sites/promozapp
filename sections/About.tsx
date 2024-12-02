export interface AboutProps {
    /**
     * @format rich-text
     * @default Sobre o PromoZap
     */
    title?: string;
    /**
     * @format textarea
     * @default O PromoZap é uma plataforma revolucionária que conecta empresas aos clientes através do WhatsApp. Nossa missão é simplificar promoções e vendas, tornando mais fácil para você expandir o seu negócio.
     */
    description?: string;
    /**
     * @format image-upload
     * @default https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326
     */
    image?: string;
    /**
     * @format text
     * @default Plataforma PromoZap
     */
    altText?: string;
}
export default function About({
    title = "Sobre o PromoZap",
    description = "O PromoZap é uma plataforma revolucionária que conecta empresas aos clientes através do WhatsApp. Nossa missão é simplificar promoções e vendas, tornando mais fácil para você expandir o seu negócio.",
    image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
    altText = "Plataforma PromoZap",
}: AboutProps) {
    return (
        <section id="sobre" class="bg-gray-200 py-20">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-8">{title}</h2>
                <p class="text-xl mb-8">{description}</p>
            </div>
        </section>
    );
}