// import useDarkModeImpl from '@fisch0920/use-dark-mode'

// export function useDarkMode() {
//   const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })

//   return {
//     isDarkMode: darkMode.value,
//     toggleDarkMode: darkMode.toggle
//   }
// }
// DARK MODE OFF

import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode'
    // Remove the "value: false" line as it's not a valid property
  })

  // Force light mode if somehow dark mode got enabled
  if (darkMode.value) {
    darkMode.disable()
  }

  return {
    // Always return false for isDarkMode
    isDarkMode: false,
    // Make toggleDarkMode just ensure we're in light mode
    toggleDarkMode: () => {
      if (darkMode.value) {
        darkMode.disable()
      }
      // Add light mode class to ensure styling is applied
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
    }
  }
}
