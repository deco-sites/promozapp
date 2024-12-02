import type { ImageWidget } from "apps/admin/widgets.ts";

export interface FooterProps {
  copyright?: string;
  logo?: ImageWidget;
  alt?: string;
}

export default function Footer({
  copyright = "© 2023 PromoZap. All rights reserved.",
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  alt = "PromoZap Logo",
}: FooterProps) {
  return (
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <img src={logo} alt={alt} class="h-8 mx-auto mb-4" />
        <p>{copyright}</p>
      </div>
    </footer>
  );
}