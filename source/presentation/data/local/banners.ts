import DialgaBanner from "@/presentation/public/images/rsc/banners/dialga_banner.jpg"
import GadevoirBanner from "@/presentation/public/images/rsc/banners/gardevoir_banner.jpg"

interface BannerParams {
  bannerId: number;
  bannerImage: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerUrl: string;
}

export const Banners: Array<BannerParams> = [
  {
    bannerId: 1,
    bannerImage: DialgaBanner.src,
    bannerTitle: "Conheça já as novas coleções!",
    bannerDescription: "Novos meta decks disponíveis! Teste ja!",
    bannerUrl: "",
    },
    {
    bannerId: 2,
    bannerImage: GadevoirBanner.src,
    bannerTitle: "Conheça já as novas coleções!",
    bannerDescription: "Novos meta decks disponíveis! Teste ja!",
    bannerUrl: "",
    },
];
