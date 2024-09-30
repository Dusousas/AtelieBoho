import { motion } from 'framer-motion';

export default function Main() {
    return (
        <>
            <section id="main" className="bgMain py-20 customH bg-[#CCA686] flex items-center justify-center lg:justify-end">
                <article className='maxWidth flex items-end justify-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-[700px] text-center py-20 bg-black bg-opacity-50 p-4 rounded-lg"
                    >
                        <h1 className="text-white textShadow text-center uppercase text-4xl mt-4 md:text-6xl font-medium">Seus cabelos precisam dos cuidados certos.</h1>
                        <p className="text-white textShadow text-center pt-4">Realce sua beleza natural com cuidados personalizados que seus cabelos merecem</p>
                        <button className="mt-4 mb-4 rounded-[6px] bg-[#313131] text-white px-6 py-2 lg:text-left">Saiba mais</button>
                    </motion.div>
                </article>
            </section>
        </>
    );
}
