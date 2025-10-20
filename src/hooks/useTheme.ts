export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): ThemeState => {
  // 这里可以实现主题切换逻辑
  return {
    isDark: false,
    toggleTheme: () => {}
  };
};