import { useState } from "react";

export default function EnigmeChecker() {
  const [answers, setAnswers] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
  });

  const [result, setResult] = useState("");

  // ✅ Remplace par les vraies réponses une fois que tu les connais
  const correctAnswers = {
    A: "53",
    B: "18",
    C: "7",
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
    setResult(allGood ? "✨ Bravo ! Tu as trouvé le trésor magique !" : "❌ Certaines réponses sont incorrectes...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🔮 Le Défi des Énigmes</h1>
      <div className="grid grid-cols-1 gap-4 max-w-md w-full">
        {Object.keys(answers).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`Réponse ${key}`}
            value={answers[key]}
            onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
            className="p-3 rounded-xl text-black"
          />
        ))}
      </div>
      <button
        onClick={checkAnswers}
        className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl shadow-lg"
      >
        Vérifier les réponses
      </button>
      {result && <p className="mt-4 text-xl">{result}</p>}
    </div>
  );
}
