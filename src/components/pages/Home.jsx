const Home = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sección de bienvenida */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                ¡Bienvenido a la App de Pedidos!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Realiza tus pedidos de productos locales y recíbelos en la
                comodidad de tu hogar en Magangué. Nuestros repartidores son de
                confianza y están comprometidos con tu satisfacción.
              </p>
            </div>
  
            {/* Sección de imagen */}
            <div className="flex justify-center items-center">
              <img
                src="http://www.turismoporbolivar.com/sites/default/files/letras.jpg"
                alt="Magangué"
                className="max-w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
  
        {/* Sección de servicios */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card de servicio */}
              <div className="bg-gray-200 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-4">Entrega Rápida</h3>
                <p className="text-gray-700">
                  Recibe tus pedidos en el menor tiempo posible.
                </p>
              </div>
  
              {/* Card de servicio */}
              <div className="bg-gray-200 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Variedad de Productos
                </h3>
                <p className="text-gray-700">
                  Gran selección de productos locales disponibles para elegir.
                </p>
              </div>
  
              {/* Card de servicio */}
              <div className="bg-gray-200 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Atención Personalizada
                </h3>
                <p className="text-gray-700">
                  Servicio al cliente dedicado para resolver tus dudas y ayudarte
                  en lo que necesites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  