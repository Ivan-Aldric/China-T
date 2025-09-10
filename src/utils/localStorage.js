// Utility functions for localStorage with error handling

export const getLocalStorageItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    
    // Try to parse as JSON first
    try {
      return JSON.parse(item);
    } catch {
      // If JSON parsing fails, return the raw string
      return item;
    }
  } catch (error) {
    console.warn(`Error reading from localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error writing to localStorage key "${key}":`, error);
  }
};

export const clearLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error clearing localStorage key "${key}":`, error);
  }
};

// Clean up any problematic entries
export const cleanupLocalStorage = () => {
  try {
    // Clear any non-JSON entries that might cause issues
    const keysToCheck = ['theme', 'language'];
    keysToCheck.forEach(key => {
      const value = localStorage.getItem(key);
      if (value && !['true', 'false', 'dark', 'light', 'french', 'english', 'fr', 'en'].includes(value)) {
        try {
          JSON.parse(value);
        } catch {
          console.warn(`Clearing invalid localStorage entry: ${key} = ${value}`);
          localStorage.removeItem(key);
        }
      }
    });
  } catch (error) {
    console.warn('Error during localStorage cleanup:', error);
  }
};
