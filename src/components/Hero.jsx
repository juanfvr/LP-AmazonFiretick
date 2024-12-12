import '../assets/styles/index.css';
import firestickLogo from '../assets/images/firestickLogo.svg';
import firestickControl from '../assets/images/firestickControl.png';


export default function Hero() {
    return (
        <>
            <section 
            className='flex flex-wrap min-[620px]:flex-nowrap justify-around items-center bg-zinc-50/[2%] bg-cover px-20'>
                <div
                className=
                '' 
            
                >
                    <img 
                    className='my-8'
                    src={firestickLogo} 
                    alt="Firestick Logo" />
                    <p
                    className='text-white text-2xl font-thin'>
                        Transforme sua TV em uma central de entretenimento. <br></br>
                        Tudo o que você ama, na ponta dos dedos.
                    </p>
                </div>
                <img
                className='w-[324px] -rotate-3'
                src={firestickControl} 
                alt="Firestick Control Device" />
            </section>
        </>
    )
}