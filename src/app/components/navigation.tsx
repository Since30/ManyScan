export default function Navigation() {
    return (
        <nav className="flex justify-between p-4 font-bold">
            <a className="text-black transition hover:font-gray">Accueil</a>
            <a className="text-black transition hover:text-gray">Tout les mangas</a>
            <a className="text-black transition hover:text-gray">Ma collection</a>
            <a className="text-black transition hover:text-gray">Se connecter</a>
            <a className="text-black transition hover:text-gray">S'inscrire</a>
        </nav>
    )
}