import { useThemeContext } from "../../../context/ThemeContext";

import "./ThemeButton.css";

export const ThemeButton = () => {
  const {toggleTheme, darkTheme} = useThemeContext()

  
  return (
    <svg onClick={toggleTheme} className={`theme-toggle ${darkTheme ? 'dark':'light'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
    </svg>
  );
};
