import '../assets/styles/index.css';

export default function NavBar() {
    return (
        <>
        <nav 
        className='flex flex-row flex-wrap justify-center lg:justify-between items-center 
        px-32 py-4 gap-2 bg-zinc-950'>
            <h1
            className='text-orange-500 w-fit whitespace-pre text-2xl lg:text-3xl font-semibold'>
                Amazon Fire TV Stick</h1>
            <ul
            className='flex max-[1024px]:hidden gap-x-16 text-xl text-white font-semibold'>
                <li><a href="#">Comprar</a></li>
                <li><a href="#">Produto</a></li>
                <li><a href="#">Especificações Técnicas</a></li>
            </ul>
        </nav>
        </>
    )
}