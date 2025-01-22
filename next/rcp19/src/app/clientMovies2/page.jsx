"use client";
import { useState } from "react";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAction(formData) {
    const titleSearchKey = formData.get("titleSearchKey").trim();

    if (!titleSearchKey) {
      setError("Por favor, insira um título para pesquisar.");
      setResultMovies([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const httpRes = await fetch(
        `http://localhost:3000/api/searchMovies?titleSearchKey=${titleSearchKey}`,
      );
      const jsonRes = await httpRes.json();

      if (jsonRes.Response === "False") {
        setError(jsonRes.Error || "Nenhum filme encontrado.");
        setResultMovies([]);
      } else {
        setResultMovies(jsonRes.Search);
      }
    } catch (err) {
      setError("Erro ao buscar os filmes. Tente novamente.");
      setResultMovies([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Pesquisa de Filmes
      </h1>
      <MovieForm handleAction={handleAction} />
      {loading && (
        <p className="text-center text-blue-500 mt-4">Carregando...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mt-4 font-medium">{error}</p>
      )}
      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ handleAction }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleAction(formData);
      }}
      className="flex flex-col items-center gap-4"
    >
      <label htmlFor="idTitleSearchKey" className="text-lg text-gray-700">
        Título
      </label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Digite o título do filme"
      />{" "}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Pesquisar
      </button>
    </form>
  );
}

export function MovieTable({ movies }) {
  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="w-full max-w-md mx-auto bg-white shadow rounded-lg p-4">
        {movies.map((m) => (
          <div
            key={m.imdbID}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span className="font-medium text-gray-800">{m.Title}</span>
            <span className="text-gray-600">{m.Year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
