function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
      <span>☀️</span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggle}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "40px",
          height: "20px",
          background: theme === "dark" ? "#4b0082" : "#ddd",
          borderRadius: "20px",
          position: "relative",
          transition: "0.3s",
        }}
      >
        <span
          style={{
            width: "18px",
            height: "18px",
            background: "white",
            borderRadius: "50%",
            position: "absolute",
            top: "1px",
            left: theme === "dark" ? "20px" : "2px",
            transition: "0.3s",
          }}
        ></span>
      </span>
      <span>🌙</span>
    </label>
  )
}
export default ThemeToggle
