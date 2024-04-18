const WhatsAppIcon = () => {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=TUNUMERODETELEFONO"
        className="bg-green-500 text-white p-4 rounded-full shadow-md fixed bottom-4 right-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Icono de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2C6.75 2 2.697 6.053 2.697 11.301c0 1.902.537 3.78 1.555 5.405l-1.558 5.317 5.616-1.457c1.584.867 3.39 1.326 5.29 1.326 5.25 0 9.302-4.052 9.302-9.301C21.302 6.053 17.25 2 12 2z"
          />
        </svg>
      </a>
    );
  };
  
  export default WhatsAppIcon;