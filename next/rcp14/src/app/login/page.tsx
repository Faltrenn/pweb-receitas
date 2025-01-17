import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1 className="h1">Login fake</h1>
      <label htmlFor="email">E-mail</label>
      <br/>
      <input type="email" name="email" id="email" />
      <br/>

      <label htmlFor="password">Senha</label>
      <br/>
      <input type="password" name="password" id="password" />
      <br/>
      <Link href="/"><button className="text-white bg-blue-700 rounded-full px-4 py-2">Entrar</button></Link>
    </div>
  );
}
