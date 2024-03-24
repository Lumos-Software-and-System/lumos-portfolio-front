interface MenuContextProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu: () => void;
}

export type { MenuContextProps };
