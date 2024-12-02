import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface HeroProps {
    /**
     * @format rich-text
     * @default <p>PromoZap</p>
     */
    title?: string;
    /**
     * @format textarea
     * @default Venha descobrir a melhor plataforma de compra e venda do Brasil e comece a acumular suas ZapMoedas antes de todo mundo! Tenha acesso a promoções exclusivas e troque suas ZapMoedas por mais descontos, cashback e muito mais.
     */
    description?: string;
    /**
     * @format color-input
     * @default #004085
     */
    primaryColor?: string;
    /**
     * @format text
     * @default Clique aqui para conhecer o PromoZap
     */
    ctaButtonText?: string;
    logoImage?: ImageWidget;
    background?: ImageWidget;
}

export default function Hero({
    title = "<p>PromoZap</p>",
    description = "Venha descobrir a melhor plataforma de compra e venda do Brasil e comece a acumular suas ZapMoedas antes de todo mundo! Tenha acesso a promoções exclusivas e troque suas ZapMoedas por mais descontos, cashback e muito mais.",
    primaryColor = "#004085",
    ctaButtonText = "Clique aqui para conhecer o PromoZap",
    logoImage = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/promoz-app/bbb0c602-e7b5-4934-ab8b-f25afed322ac/Screenshot-2024-11-30-at-18.28.55.png",
    background,
}: HeroProps) {
    return (
        <section
            class="relative bg-cover bg-center py-16 lg:py-28"
            style={{
                backgroundImage: background
                    ? `url(${background})`
                    : "linear-gradient(to right, #f3f4f6, #e5e7eb)",
            }}
        >
            <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div class="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1
                        class="text-4xl lg:text-6xl font-extrabold text-gray-800"
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></h1>
                    <p class="text-lg text-gray-600">{description}</p>
                    <div class="mt-6">
                        <a
                            href="https://wa.me/558393975190?text=Ol%C3%A1%2C+gostaria+de+criar+uma+conta.+Meu+c%C3%B3digo+de+convite+%C3%A9%3A+7W4Zc6wVz"
                            class="btn btn-primary btn-lg font-semibold text-white"
                            style={{
                                backgroundColor: primaryColor,
                                borderColor: primaryColor,
                            }}
                        >
                            {ctaButtonText}
                        </a>
                    </div>
                </div>
                {/* Logo Section */}
                <div class="lg:w-1/2 flex items-center justify-center">
                    {logoImage && (
                        <Image
                            src={logoImage}
                            alt="PromoZap Logo"
                            width={300}
                            height={300}
                            // class="rounded-full shadow-lg"
                            loading="lazy"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}