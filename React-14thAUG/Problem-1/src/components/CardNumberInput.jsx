import React, { useRef } from "react";

export default function CardNumberInput({ onChange }) {
  const inputRef = useRef(null);
  const isComposing = useRef(false);

  const formatValue = (digits) =>
    digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
 
  const getRawDigits = (val) => val.replace(/\D/g, "");

  const handleInput = () => {
    if (isComposing.current) return;

    const el = inputRef.current;
    const raw = getRawDigits(el.value);
    const formatted = formatValue(raw);

    const start = el.selectionStart;
    const before = getRawDigits(el.value.slice(0, start));
    el.value = formatted;

    const newCaret = formatted
      .split("")
      .reduce((pos, ch, i) => (pos < before.length ? i + 1 : pos), 0);

    el.setSelectionRange(newCaret, newCaret);

    if (onChange) onChange(raw);
  };

  const handleKeyDown = (e) => {
    if (
      !(
        e.key >= "0" && e.key <= "9" ||
        ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) ||
        (e.ctrlKey || e.metaKey)
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      placeholder="1234 5678 9012 3456"
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onCompositionStart={() => (isComposing.current = true)}
      onCompositionEnd={() => {
        isComposing.current = false;
        handleInput();
      }}
      style={{
        fontSize: "18px",
        padding: "10px",
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    />
  );
}
