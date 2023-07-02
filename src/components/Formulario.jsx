const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">administralos</span>
            </p>
            <form className="background-white shadow-md rounded-lg py-10 px-5">
                <div className="mb-5">
                    <label htmlFor="mascota" className=" text-gray-700 uppercase font-bold" >Nombre mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className=" text-gray-700 uppercase font-bold" >Nombre propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre del propetario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className=" text-gray-700 uppercase font-bold" >Nombre mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
            </form>
        </div>

    )
}

export default Formulario
