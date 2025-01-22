import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 w-full bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              id="password"
              className="mt-2 p-3 w-full bg-gray-700 text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
