import '../assets/styles/index.css';

export default function ProductInfo() {
    return (
        <>
            <section id='product-info' className='bg-zinc-950'>
                <ul
                className='flex flex-col mx-14 my-8 gap-y-2 list-disc text-white text-xl'>
                    <li>
                        <b className='text-orange-500'>Fire TV com Alexa</b>: aproveite streaming rápido e em <b className='text-orange-500'>Full HD</b>.
                        Inclui  Controle Remoto por Voz com <b className='text-orange-500'>Alexa</b>,
                        com botões de ligar e desligar e  volume.
                    </li>
                    <li>
                        Mantenha o botão de voz pressionado e peça para Alexa para buscar e 
                        iniciar conteúdo facilmente no <b className='text-orange-500'>Prime Video</b>, <b className='text-orange-500'>Netflix</b> e <b className='text-orange-500'>YouTube</b>. 
                        Controle  sua TV, soundbar e receptor compatíveis usando os 
                        botões de ligar e  desligar e de volume.
                    </li>
                    <li>
                        Alta qualidade de som com <b className='text-orange-500'>Dolby Atmos</b>: cenas ganham vida com o som imersivo 
                        <b className='text-orange-500'>&nbsp;Dolby Atmos</b> em conteúdos selecionados com equipamentos  compatíveis.
                    </li>
                    <li>
                        Faça streaming de mais de <b className='text-orange-500'>250.000 filmes</b> e episódios de séries. 
                        Assista aos seus conteúdos favoritos do <b className='text-orange-500'>Prime Video</b>, <b className='text-orange-500'>Netflix</b>, <b className='text-orange-500'>YouTube</b>,
                        <b className='text-orange-500'>&nbsp;Globoplay</b>, <b className='text-orange-500'>Disney+</b>, <b className='text-orange-500'>Max</b>, <b className='text-orange-500'>Amazon Music</b>, <b className='text-orange-500'>Spotify</b> 
                        &nbsp;e muito mais. Tarifas de  assinatura podem ser aplicadas.
                    </li>
                    <li>
                        TV ao vivo e esportes com <b className='text-orange-500'>Globoplay+ canais</b>, <b className='text-orange-500'>PlayPlus</b>, 
                        <b className='text-orange-500'>Sky+</b>, <b className='text-orange-500'>Vivo  Play</b>, <b className='text-orange-500'>Claro TV+</b> e outros.
                    </li>
                    <li>
                        TV grátis: assista a conteúdos gratuitos com <b className='text-orange-500'>Pluto TV</b>, <b className='text-orange-500'>VIX</b> e 
                        <b className='text-orange-500'>&nbsp;Red Bull TV</b> e conteúdos liberados com <b className='text-orange-500'>Globoplay</b>.
                    </li>
                    <li>
                    Ouça música: <b className='text-orange-500'>Amazon Music</b>, <b className='text-orange-500'>Spotify</b>, <b className='text-orange-500'>Vevo</b> e outros serviços de streaming.
                    </li>
                </ul>
            </section>
        </>
    )
}