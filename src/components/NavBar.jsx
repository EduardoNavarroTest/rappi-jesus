import React from "react";

const NavBar = () => {
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                {/* Logo */}
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
                        {/* Tu icono */}
                    </svg>
                </a>

                {/* Menú para pantallas grandes */}
                <ul className="hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Servicios</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Repartidores</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
                    </li>
                </ul>

                {/* Botones de inicio de sesión y registro para pantallas grandes */}
                <div className="hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Iniciar</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Salir</button>
                </div>

                {/* Menú hamburguesa para pantallas pequeñas */}
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavBar;