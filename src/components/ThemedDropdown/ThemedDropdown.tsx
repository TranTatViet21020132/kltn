import { useContext } from 'react';
import { ConfigProvider, Dropdown, theme, MenuProps } from 'antd';
import { FiMenu } from 'react-icons/fi';
import { ThemeContext } from '@/hooks/useDarkMode';

export interface IThemedDropdown {
  menuItems: MenuProps['items'];
}

const ThemedDropdown = ({ menuItems }: IThemedDropdown) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme: contextTheme } = themeContext;

  return (
    <ConfigProvider
      theme={{
        algorithm: contextTheme === 'dark' ? theme.darkAlgorithm : undefined,
      }}
    >
      <Dropdown
        menu={{ items: menuItems }}
        // trigger={['click']}
        overlayClassName="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg"
        autoAdjustOverflow
      >
        <FiMenu size={22} className="cursor-pointer text-gray-800 dark:text-white" />
      </Dropdown>
    </ConfigProvider>
  );
};

export default ThemedDropdown;
