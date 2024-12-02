export interface JoinUsProps {
    /**
     * @format rich-text
     * @default Junte-se a Nós
     */
    title?: string;
    /**
     * @format textarea
     * @default Pronto para impulsionar o seu negócio com o PromoZap? Entre em contato conosco hoje mesmo!
     */
    description?: string;
    /**
     * @format color-input
     * @default #128C7E
     */
    secondaryColor?: string;
    /**
     * @format text
     * @default Entre em Contato
     */
    buttonText?: string;
}
export default function JoinUs({
    title = "Junte-se a Nós",
    description = "Pronto para impulsionar o seu negócio com o PromoZap? Entre em contato conosco hoje mesmo!",
    secondaryColor = "#128C7E",
    buttonText = "Entre em Contato",
}: JoinUsProps) {
    return (
        <section id="contact" class="py-20">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-8">{title}</h2>
                <p class="text-xl mb-8">{description}</p>
                <button
                    class="btn btn-secondary btn-lg text-white"
                    style={{
                        backgroundColor: secondaryColor,
                        borderColor: secondaryColor,
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
}