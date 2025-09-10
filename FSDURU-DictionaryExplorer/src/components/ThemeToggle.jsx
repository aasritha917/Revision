function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "light" ? "dark" : "light")
  return (
    <button onClick={toggle}>
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  )
}
export default ThemeToggle
