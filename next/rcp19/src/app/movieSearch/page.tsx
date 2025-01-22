import Form from "next/form";

export default async function MovieForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Pesquisar Filmes
        </h1>
        <Form action="/movies" className="space-y-6">
          <Field
            id="idTitleSearchKey"
            name="titleSearchKey"
            label="Título"
            placeholder="Digite o título do filme"
          />
          <Field
            id="idYear"
            name="year"
            label="Ano"
            placeholder="Digite o ano do filme"
          />
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 font-semibold transition-colors"
          >
            Pesquisar
          </button>
        </Form>
      </div>
    </div>
  );
}

function Field({ id, name, label, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 font-semibold mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
