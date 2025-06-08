import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Importar el Footer

const Contacto = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      asunto: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      correo: Yup.string()
        .matches(/^(?=.*@)(?=.*\.)/, "El correo debe contener un '@' y un '.'")
        .required("El correo es obligatorio"),
      asunto: Yup.string().required("El asunto es obligatorio"),
    }),
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log("Formulario enviado:", values);
      localStorage.setItem("contactoData", JSON.stringify(values));
      setShowModal(true);
    },
  });

  React.useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-700 relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section className="flex items-center justify-center py-10 px-4 flex-grow">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 text-black font-bold text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-2xl hover:bg-gray-300 transition absolute top-2 left-2 sm:top-4 sm:left-4 z-50"
        >
          Volver
        </button>

        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">Contáctanos</h2>
          <form noValidate onSubmit={formik.handleSubmit} className="space-y-4">
            {["nombre", "apellido", "correo", "asunto"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1) + ":"}
                </label>
                <input
                  id={field}
                  type={field === "correo" ? "email" : "text"}
                  placeholder={`Ingresa tu ${field}`}
                  {...formik.getFieldProps(field)}
                  onFocus={() => formik.setFieldTouched(field, true, false)}
                  className={`mt-1 bg-white block w-full px-3 py-2 rounded shadow-sm focus:outline-none placeholder-black placeholder:text-sm text-base border-2 ${
                    formik.touched[field]
                      ? formik.errors[field]
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-black"
                  }`}
                />
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors[field]}</p>
                )}
              </div>
            ))}
            <button type="submit" className="w-full bg-blue-700 text-white font-bold py-2 px-2 rounded shadow hover:bg-blue-800 transition text-lg">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer siempre al final */}
      <Footer />
    </div>
  );
};

export default Contacto;
