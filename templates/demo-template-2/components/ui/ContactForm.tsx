"use client";

import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

import { useState } from "react";
import Modal from "./Modal";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
  service?: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowModal(true);
        reset();
      } else {
        console.log("Oops! Something went wrong. Please try again.");
        setShowModal(true);
        reset();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Nombre *"
              {...register("name", { required: "Por favor ingrese su nombre" })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email *"
              {...register("email", {
                required: "Por favor ingrese su email",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Ingrese una dirección de email válida",
                },
              })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            type="phone"
            placeholder="Telefono *"
            {...register("phone", {
              required: "Por favor ingrese su telefono",
              // pattern: {
              //   value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              //   message: "Ingrese un numero valido",
              // },
            })}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Mensaje *"
            {...register("message", {
              required: "Por favor escriba su mensaje.",
            })}
            className="w-full h-28 rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-4 flex items-center justify-center">
          <Button type="submit" variant="primary" size="md" className="w-full">
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </div>
      </form>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold text-dark mb-4">Mensaje Enviado</h2>
        <p className="text-muted mb-6">
          Gracias! Te responderemos a la brevedad durante nuestro horario
          administrativo.
        </p>
        <Button onClick={() => setShowModal(false)} variant="primary" size="md">
          Cerrar
        </Button>
      </Modal>
    </>
  );
}
