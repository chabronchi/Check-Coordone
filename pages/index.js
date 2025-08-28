import { useState } from "react";

export default function Home() {
  const [answers, setAnswers] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
  });

  const [result, setResult] = useState("");

  // ✅ Remplace ces valeurs par les réponses exactes
  const correctAnswers = {
    A: "42",
    B: "7",
    C: "3",
    D: "13",
    E: "54",
    F: "3",
  };

  const checkAnswers = () => {
    let allGood = true;
    for (const key in correctAnswers) {
      if (answers[key].trim() !== correctAnswers[key]) {
        allGood = false;
        break;
      }
    }
    setResult(
      allGood
        ? "✨ Bravo ! Tu as trouvé le trésor magique !"
        : "❌ Certaines réponses sont incorrectes..."
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #4c1d95, #1e3a8a)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        🔮 Le Défi des Énigmes
      </h1>
      <div style={{ display: "grid", gap: "10px", width: "100%", maxWidth: "400px" }}>
        {Object.keys(answers).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`Réponse ${key}`}
            value={answers[key]}
            onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
            style={{ padding: "10px", borderRadius: "10px", border: "none", color: "black" }}
          />
        ))}
      </div>
      <button
        onClick={checkAnswers}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#db2777",
          borderRadius: "10px",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Vérifier les réponses
      </button>
      {result && <p style={{ marginTop: "15px", fontSize: "1.2rem" }}>{result}</p>}
    </div>
  );
}
