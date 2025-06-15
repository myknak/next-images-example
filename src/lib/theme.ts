'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Get stored theme value if available
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
    
    updateResolvedTheme(stored || 'system');
    
    // Set up listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateResolvedTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);
  
  function updateResolvedTheme(theme: Theme) {
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
      setResolvedTheme(theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }
  
  function setThemeValue(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateResolvedTheme(newTheme);
  }
  
  return { theme, resolvedTheme, setTheme: setThemeValue };
}

/**
 * Utility function for creating SVG patterns with theme variables
 */
export function createThemePattern(
  patternPath: string, 
  fillClass: string = 'fill-gray-100',
  opacity: number = 0.2
) {
  return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${encodeURIComponent(patternPath)}' class='${fillClass}' fill-opacity='${opacity}' /%3E%3C/svg%3E")`;
}
