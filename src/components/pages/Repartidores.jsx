const Repartidores = () => {
    return (
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Nuestros Repartidores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card de repartidor */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/repartidor.png"
                className="w-full h-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jesús Acuña</h3>
              <p className="text-gray-700">
                Con más de 5 años de experiencia entregando pedidos con rapidez y seguridad.
              </p>
            </div>
  
            {/* Card de repartidor */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/repartidora.jpeg"
                alt="María López"
                className="w-full h-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">María López</h3>
              <p className="text-gray-700">
                Amable y comprometida con brindar un servicio de calidad a cada cliente.
              </p>
            </div>
  
            {/* Card de repartidor */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="/repartidor.png"
                className="w-full h-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">El Maikel</h3>
              <p className="text-gray-700">
                Siempre dispuesto a resolver cualquier problema y asegurar que recibas tus pedidos a tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Repartidores;