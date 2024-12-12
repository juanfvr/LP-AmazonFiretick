import '../assets/styles/index.css';
import githubLogo from '../assets/images/githubLogo.svg';

export default function Footer() {
    return (
        <>
        <div className='flex flex-row flex-wrapo items-center justify-between bg-zinc-50/[2%] text-white px-8 py-6'>
            <span className='text-xl'>Todos direitos reservados à © 2021-2024 Amazon.com, Inc.</span>
            <div>
                <a href="https://www.amazon.com.br/Fire-TV-Stick-Streaming/dp/B08C1K6LB2" className='flex flex-row items-center gap-x-4 text-xl underline'>
                    Visite meu GitHub
                    <img src={githubLogo} alt="GitHub Logo" />
                </a> 
            </div>
        </div>
        </>
    )
}