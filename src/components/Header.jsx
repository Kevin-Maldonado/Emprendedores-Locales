import Navbar from "./Navbar";
export default function Header({ setPage })
{
    return (
        <header className="header ">
            <h1>Emprendedores Unidos</h1>
            <Navbar setPage={setPage} />
        </header>
    );
}