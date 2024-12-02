import type { ImageWidget } from "apps/admin/widgets.ts";

export interface HeaderProps {
    logo?: ImageWidget;
    alt?: string;
    navigation?: {
        links: { label: string; url: string }[];
    };
}

export default function Header({
    logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    alt = "PromoZap Logo",
    navigation = {
        links: [
            { label: "Features", url: "#features" },
            { label: "About", url: "#about" },
            { label: "Contact", url: "#contact" },
        ],
    },
}: HeaderProps) {
    return (
        <header class="bg-white shadow-md">
            <div class="container mx-auto px-4 py-6 flex justify-between items-center">
                <img src={logo} alt={alt} class="h-12" />
                <nav>
                    <ul class="flex space-x-6">
                        {navigation.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} class="text-gray-600 hover:text-gray-900">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}