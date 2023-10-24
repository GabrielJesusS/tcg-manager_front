import { deckTutorialAtom } from "@/presentation/store/deckAtoms";
import { generateTourMessage } from "@/presentation/utils/generateTourMessage";
import { ShepherdOptionsWithType, ShepherdTour } from "react-shepherd";
import { useSetRecoilState } from "recoil";

const icon = `<svg viewBox="0 0 24 24" fill="white" width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29 6.71C9.1973 6.80251 9.12375 6.9124 9.07357 7.03337C9.02339 7.15435 8.99756 7.28403 8.99756 7.415C8.99756 7.54597 9.02339 7.67565 9.07357 7.79662C9.12375 7.9176 9.1973 8.02749 9.29 8.12L13.17 12L9.29 15.88C9.19742 15.9726 9.12398 16.0825 9.07388 16.2035C9.02377 16.3244 8.99798 16.4541 8.99798 16.585C8.99798 16.7159 9.02377 16.8456 9.07388 16.9665C9.12398 17.0875 9.19742 17.1974 9.29 17.29C9.38258 17.3826 9.4925 17.456 9.61346 17.5061C9.73442 17.5562 9.86407 17.582 9.995 17.582C10.1259 17.582 10.2556 17.5562 10.3765 17.5061C10.4975 17.456 10.6074 17.3826 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4563 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7343 15.5064 11.6134C15.4563 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.7C10.32 6.32 9.68 6.32 9.29 6.71Z"/>
</svg>
`;

interface IDeckTour {
  children: React.ReactNode;
}
export const DeckTour = ({ children }: IDeckTour): JSX.Element => {
  const setTourFinished = useSetRecoilState(deckTutorialAtom);

  const tourButtons = [
    {
      text: "Pular",
      action() {
        setTourFinished(true);
        this.complete();
      },
    },
    {
      text: `<span class="rotate-180 block" >${icon}</span>`,
      type: "back",
    },
    {
      text: `<span class="block">${icon}</span>`,
      action() {
        const currentStepId = this.getCurrentStep();

        if (currentStepId.id === "finish") {
          setTourFinished(true);
        }

        this.next();
      },
    },
  ];

  const steps: ShepherdOptionsWithType[] = [
    {
      id: "intro",
      buttons: tourButtons,
      text: [generateTourMessage("Seja bem vindo ao criador de baralhos!")],
    },
    {
      id: "metadata",
      buttons: tourButtons,
      attachTo: { element: ".first-element", on: "bottom" },
      scrollTo: true,
      text: [
        generateTourMessage(
          "Aqui você consegue editar os metadados de seu baralho, como nome, descrição e dificuldade"
        ),
      ],
    },
    {
      id: "newCard",
      buttons: tourButtons,
      attachTo: { element: ".second-element", on: "top" },
      scrollTo: true,
      text: [
        generateTourMessage(
          "Clicando aqui é possivel adicionar uma nova carta!"
        ),
      ],
    },
    {
      id: "statistics",
      buttons: tourButtons,
      scrollTo: true,
      attachTo: { element: ".third-element", on: "bottom" },
      text: [
        generateTourMessage(
          "Veja quantas cartas você possui e como está a composição de seu baralho!"
        ),
      ],
    },
    {
      id: "cardEdit",
      buttons: tourButtons,
      scrollTo: true,
      attachTo: { element: ".fourth-element", on: "left" },
      text: [
        generateTourMessage(
          "Você pode editar a quantidade de cartas neste campo ('Selecione uma carta')"
        ),
      ],
    },
    {
      id: "finish",
      buttons: tourButtons,
      text: [
        generateTourMessage(
          "Caso precise de ajuda, estarei sempre a disposição!"
        ),
      ],
    },
  ];

  return (
    <ShepherdTour
      steps={steps}
      tourOptions={{
        useModalOverlay: true,
      }}
    >
      {children}
    </ShepherdTour>
  );
};
