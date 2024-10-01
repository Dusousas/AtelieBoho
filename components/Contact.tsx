import axios from "axios";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import React from 'react';


type FormData = {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
};

const Contact: React.FC = () => {
    const { register, setValue, getValues, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {

        await axios.post('https://formspree.io/f/xvoeevaw', data)
            .then(() => {
                toast.success('Mensagem enviada com sucesso!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            })
    }

    function formatarTelefone() {
        setValue('telefone', getValues('telefone').replace(/\D/g, "").substring(0, 11))

        if (getValues('telefone').length >= 11) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, "($1) $2 $3-$4"));
        } else if (getValues('telefone').length >= 7) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)(\d{4})/, "($1) $2 $3-"));
        } else if (getValues('telefone').length >= 3) {
            setValue('telefone', getValues('telefone').replace(/^(\d{2})(\d)/, "($1) $2 "));
        }
    }
    return (
        <>
            <section id="contact" className="customH py-20">
                <div className="maxWidth md:flex items-center gap-6">

                    <div className="w-full md:w-1/2">
                        <p className="text-center lg:text-left">Ficou com alguma dúvida?</p>
                        <h1 className="text-[#cca686] uppercase text-3xl text-center tracking-wide lg:text-left">Fale Conosco</h1>
                        <p className="text-center pt-6 lg:text-left">Não perca mais tempo e entre em contato com nossa equipe de especialistas. Teremos o mais prazer em ajudar você.</p>
                        <article className="flex items-center justify-center pt-6 gap-4">
                            <a href="https://www.instagram.com/atelie.boho/" target="_blank"><img src="/instagram.png" alt="" /></a>
                            <a href="#"><img src="/facebook.png" alt="" /></a>
                            <a href="https://wa.me/5514910057531?text=Olá,%20visitei%20o%20site%20Boho%20Atelie%20e%20fiquei%20interessado(a)%20nos%20seus%20serviços.%20Gostaria%20de%20agendar%20um%20horário%20para%20conhecer%20mais%20de%20perto%20o%20trabalho%20de%20vocês." target="_blank"><img src="/whatsapp.png" alt="" /></a>
                        </article>

                        <article className="flex justify-center items-center pt-6 lg:justify-start">
                            <img src="pin.png" alt="" />
                            <p className="lg:text-left">Av Mário Pinotte 1120. Centro, Brotas-SP</p>
                        </article>

                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center ">
                        <form className="mt-6 border-[1px] rounded-md p-10 gap-4  max-w-[550px]" action="#" method="post" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-[#cca686] text-xl mb-2">Formulário de contato</h1>
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite seu primeiro nome*" type="text" {...register("nome", { required: "Por favor, preencha seu nome!" })} />
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite um e-mail valido*" type="email" {...register("email", { required: "Por favor, preencha seu email!" })} />
                            <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Ex: (11)9 1234-0000*" type="tel" {...register("telefone", { required: "Por favor, preencha seu telefone!", onChange: (e) => { formatarTelefone() } })} />
                            <textarea className="border w-full py-6 px-2 resize-none mb-4 outline-none" placeholder="Conte-nos tudo*" {...register("mensagem", { required: "Por favor, preencha sua mensagem!" })} />
                            <button className="bg-[#313131] text-white py-2 px-9 rounded-md" type="submit">Enviar</button>
                            <div id="mensagemErro" style={{ color: 'red' }}> {errors.nome?.message || errors.email?.message || errors.telefone?.message || errors.mensagem?.message}</div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Contact;