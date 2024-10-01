import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import React from 'react';


type FormData = {
  email: string;
};

const Signature: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post("https://api.sheetmonkey.io/form/5pko96v5ZnWW4hCsB5M6jG", data);
      toast.success("Email cadastrado com sucesso!", {
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
    } catch (error) {
      toast.error("Houve um erro ao cadastrar o email.", {
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
    }
  };

  return (
    <>
      <section id="services" className="assine customH py-4 flex flex-col items-center justify-center">
        <h4 className="text-lg uppercase text-[#cca686] text-center tracking-[4px]">Assine</h4>
        <h1 className="text-center text-4xl font-Dancing text-white">Boho Ateliê</h1>
        <p className="text-center text-white my-2">
          Cadastre-se para receber gratuitamente nossas promoções diretamente em seu e-mail.
        </p>

        <form
          className="formAssine max-w-[80%] lg:w-full"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="register-btn w-full flex flex-col lg:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Informe seu e-mail"
              className="rounded outline-none py-2 px-4 lg:w-[28%] "
              {...register("email", { required: "Por favor, preencha seu email!" })}
            />
            <button className="btnAssine" type="submit">
              Assinar Boho
            </button>
          </div>
          {errors.email && <div id="mensagemErro" style={{ color: "red" }}>{errors.email.message}</div>}
        </form>
      </section>
    </>
  );
};

export default Signature;
