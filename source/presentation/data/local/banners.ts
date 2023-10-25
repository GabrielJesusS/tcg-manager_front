import CharizardBanner from "@/presentation/public/images/rsc/banners/charizard_banner.webp";
import DragoniteBanner from "@/presentation/public/images/rsc/banners/dragonite_banner.webp";
import RevravroomBanner from "@/presentation/public/images/rsc/banners/revravoom_banner.webp";

interface BannerParams {
  bannerId: number;
  bannerImage: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerUrl: string;
}

export const Banners: BannerParams[] = [
  {
    bannerId: 1,
    bannerImage: CharizardBanner.src,
    bannerTitle: "Conheça já as novas coleções!",
    bannerDescription: "Novos decks disponíveis! Teste ja!",
    bannerUrl: "/cartas/?set=sv3",
  },
  {
    bannerId: 2,
    bannerImage: DragoniteBanner.src,
    bannerTitle: "Conheça já as novas coleções!",
    bannerDescription: "Novos decks disponíveis! Teste ja!",
    bannerUrl: "/cartas/?set=sv3",
  },
  {
    bannerId: 3,
    bannerImage: RevravroomBanner.src,
    bannerTitle: "Conheça já as novas coleções!",
    bannerDescription: "Novos decks disponíveis! Teste ja!",
    bannerUrl: "/cartas/?set=sv3",
  },
];
