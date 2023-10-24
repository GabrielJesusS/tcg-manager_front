import RotomDex from "@/presentation/public/images/rsc/rotom-dex.png";

export function generateTourMessage(message: string): string {
  return ` <div class="w-full">
        <p class="mx-auto text-center">${message}</p>
        <img class="mx-auto" src="${RotomDex.src}" />
        </div>`;
}
