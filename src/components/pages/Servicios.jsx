const Servicios = () => {
    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card de servicio */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">Entrega Rápida</h3>
              <p className="text-gray-700">
                Recibe tus pedidos en el menor tiempo posible.
              </p>
            </div>
  
            {/* Card de servicio */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Variedad de Productos
              </h3>
              <p className="text-gray-700">
                Gran selección de productos locales disponibles para elegir.
              </p>
            </div>
  
            {/* Card de servicio */}
            <div className="bg-white p-6 rounded-md shadow-md">
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
    );
  };
  
  export default Servicios;