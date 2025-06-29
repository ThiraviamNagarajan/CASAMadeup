const Badge = ({ text, highlight }) => {
  const words = text.split(" ");
  if (words.length === 0) return null;

  let highlightWord = "";
  let remainingText = "";

  if (highlight === "first") {
    highlightWord = words[0];
    remainingText = words.slice(1).join(" ");
  } else {
    highlightWord = words[words.length - 1];
    remainingText = words.slice(0, -1).join(" ");
  }

  return (
    <span className="inline-block p-[6px] rounded bg-[#ffffff]">
      {highlight === "first" ? (
        <>
          <span style={{ color: "#e10000" }}>{highlightWord}</span>{" "}
          <span style={{ color: "#333333" }}>{remainingText}</span>
        </>
      ) : (
        <>
          <span style={{ color: "#333333" }}>{remainingText}</span>{" "}
          <span style={{ color: "#e10000" }}>{highlightWord}</span>
        </>
      )}
    </span>
  );
};

export default Badge;
