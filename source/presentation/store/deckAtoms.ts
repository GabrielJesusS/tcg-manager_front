import Cookies from "js-cookie";
import { atom } from "recoil";

const cookieStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const localValue = Cookies.get(key);

    if (localValue != null) {
      setSelf(JSON.parse(localValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? Cookies.remove(key)
        : Cookies.set(key, JSON.stringify(newValue));
    });
  };

export const deckTutorialAtom = atom({
  key: "deckTutorialAtom",
  default: false,
  effects: [cookieStorageEffect("hasSeenDeckTutorial")],
});
