import '../assets/styles/index.css';

export default function TechnicalInfo() {
    return (
        <>
            <section id='technical-info' className='flex flex-col justify-center items-center p-4 gap-8 text-3xl text-white font-bold bg-zinc-50/[2%]'>
                <h1>Especificações Técnicas</h1>
                <div className='flex flex-col min-[620px]:flex-row flex-wrap gap-2'>
                    <div className='flex flex-1 text-white font-thin p-8 bg-zinc-900 min-w-[320px] rounded-md text-2xl'>
                        <ul className='flex flex-col gap-y-4'>
                            <li>Tamanho: 86 mm x 30 mm x 13 mm;</li>
                            <li>Processador: Quad-core 1.7 GHz;</li>
                            <li>GPU: IMG GE8300;</li>
                            <li>Memória: 8GB destinado a conteúdo e sistema operacional;</li>
                            <li>Bluetooth: Bluetooth 5.0 e Bluetooth Low Energy;</li>
                        </ul>
                    </div>
                    <div className='flex flex-1 text-white font-thin p-8 bg-zinc-900 min-w-[320px] rounded-md text-2xl'>
                        <ul className='flex flex-col gap-y-4'>
                            <li>Resoluções compatíveis: 1080p e 720p até 60 fps;</li>
                            <li>Requerimentos: TV com entrada HDMI e Internet;</li>
                            <li>Ano de lançamento: 2021;</li>
                            <li>Garantia: garantia limitada por 1 ano;</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}