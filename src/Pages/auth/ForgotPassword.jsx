import React from "react";
import NavBar from "../../components/auth/NavBar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {

    //Definiendo la validacion
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset
    } = useForm()

    const onSubmit = (data) => {
      console.log(data)
    };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="w-1/4 mt-20">
          <h1 className="text-black font-semibold text-2xl">
            Colabora como nunca antes
          </h1>
          <h1 className="text-gray-500 text-2xl font-semibold ">
            Recupera tu contraseña
          </h1>
          <form className="mt-12 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-12 ">
              <label className="font-semibold" htmlFor="email">
                Correo electronico*
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded-lg border"
                placeholder="Ingresa tu correo electrónico"
                {...register("email", { required: true })}
              />
            </div>
            <button className="bg-purple-800 mb-2 text-white w-full py-2 font-semibold rounded-lg hover:bg-purple-700">
              Continuar
            </button>
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm text-center">
                El correo es obligatorio
              </p>
            )}
          </form>
          <p className="text-sm m-2 mb-4 text-gray-500">
              Te enviaremos un correo a tu cuenta de correo para 
              restablecer tu contraseña.
            </p>
          <div className="flex flex-row justify-center hover:underline">
            <Link to="/">Volver a inicio</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
