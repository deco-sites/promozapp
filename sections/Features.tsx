import { ImageWidget } from "apps/admin/widgets.ts";
export interface Feature {
    /**
     * @format text
     * @default Título do Recurso
     */
    title: string;
    /**
     * @format textarea
     * @default Descrição breve do recurso
     */
    description: string;
    /**
     * @format text
     * @default 🚀
     */
    emoji: string;
}
export interface FeaturesProps {
    /**
     * @format rich-text
     * @default Principais Recursos
     */
    title?: string;
    /**
     * @format color-input
     * @default #128C7E
     */
    secondaryColor?: string;
    /**
     * @default []
     */
    features?: Feature[];
}
export default function Features({
    title = "Principais Recursos",
    secondaryColor = "#128C7E",
    features = [
        {
            title: "Fácil de usar",
            description: "Navegue pela plataforma sem dificuldades, com uma interface amigável e intuitiva.",
            emoji: "🚀",
        },
        {
            title: "Promoções exclusivas",
            description: "Aproveite ofertas únicas para os usuários do PromoZap.",
            emoji: "💥",
        },
        {
            title: "Vendas diretas no WhatsApp",
            description: "Venda diretamente para seus clientes via WhatsApp, com eficiência e praticidade.",
            emoji: "💬",
        },
        {
            title: "Aumente sua base de clientes",
            description: "Conquiste novos clientes e amplie o alcance do seu negócio.",
            emoji: "👥",
        },
        {
            title: "Impulsione suas vendas",
            description: "Utilize nossas ferramentas para melhorar suas vendas e resultados.",
            emoji: "📈",
        },
        {
            title: "Comunicação em tempo real",
            description: "Converse com seus clientes em tempo real para fechar vendas rapidamente.",
            emoji: "⚡",
        },
    ],
}: FeaturesProps) {
    return (
        <section id="features" class="py-20">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">{title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} class="bg-white rounded-lg shadow-md p-6">
                            <div class="text-3xl mb-4" style={{ color: secondaryColor }}>
                                {feature.emoji}
                            </div>
                            <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p class="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}