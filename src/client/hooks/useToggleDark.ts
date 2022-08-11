import Theme from "client/common/tailwind/constants/Theme";
import { useLayoutEffect, useRef, useState } from "react";
import LocalStorageKey from "../common/constants/LocalStorageKey";



const getThemeFromLocalStorage = () => localStorage.getItem(LocalStorageKey.THEME);
const isDark = () => getThemeFromLocalStorage() === Theme.DARK;

const toggleDarkInLocalStorage = () =>
  isDark()
    ? localStorage.setItem(LocalStorageKey.THEME, Theme.LIGHT)
    : localStorage.setItem(LocalStorageKey.THEME, Theme.DARK);
;

const toggleDarkInDOM = () => document.documentElement.classList.toggle(Theme.DARK);

const toggleDark = () => {
  toggleDarkInDOM();
  toggleDarkInLocalStorage();
};


const useToggleDark = (): [boolean, () => void] => {
  const [dark, setDark] = useState(isDark());
  const firstUpdate = useRef(true);

  const toggle = () => {
    toggleDark();
    setDark(!dark);
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      if (isDark()) {
        toggleDarkInDOM();
      }
    }
  });

  return [dark, toggle];
};

export default useToggleDark;
