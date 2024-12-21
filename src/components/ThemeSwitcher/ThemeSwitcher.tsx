import React, { useContext } from 'react';
import { ThemeContext } from '@/hooks/useDarkMode';
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

interface IThemeSwitcher {
  children: React.ReactNode;
}

const ThemeSwitcher = ({ children }: IThemeSwitcher) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div onClick={toggleTheme} className='flex w-full items-center gap-2'>
      {theme === 'light' ? 
      <MdOutlineWbSunny size={22} className='text-yellow-500'/> : 
      <LuMoon size={22} className='text-white'/>}
      {children}
    </div>

  );
};

export default ThemeSwitcher;