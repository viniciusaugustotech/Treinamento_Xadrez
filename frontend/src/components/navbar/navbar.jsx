import "@/components/header/header.css";
import { Link } from 'react-router-dom';

export function Cabecalho() {
    return (
        <div className="cabecalho">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="lista">
                <div className="navegacao">
                    <ul>
                        <li>Iniciar</li>
                        <li>Cursos</li>
                        <li>Treinar</li>
                        <li>Progresso</li>
                        <li>Movimentos</li>
                        <li>Perfil do Usuário</li>
                    </ul>
                </div>
                <div>
                    <img src="" alt="" />
                    <Link href="/"></Link>
                </div>
            </div>
        </div>
    )
}