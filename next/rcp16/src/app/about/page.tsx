import Link from "next/link";

import ComponentB from '../componentB/page';

export function ComponentA() {
    return <div>Este é o Componente A!</div>;
}

export default function Rota1() {
    return (
        <div>
            <h1 className="h1">Rota 1</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ratione repellat tenetur, dolores porro fugit nihil velit culpa excepturi libero officia rem, impedit officiis temporibus voluptas vero numquam, error recusandae.</p>
            <ComponentA />
            <ComponentB />
            <Link href="/login"><button className="text-white bg-blue-700 rounded-full px-4 py-2">Fazer login</button></Link>
        </div>
    );
}
