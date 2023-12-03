export default function ContactForm() {
    return (
        <div className='flex h-screen'>
            {/* Left side with illustration */}
            <div className='w-1/2 bg-white p-8'>
                {/* Put your illustration components or images here */}
            </div>
            
            {/* Right side with form */}
            <div className='w-1/2 flex justify-center items-center'>
                <div className='max-w-md w-full border-2 border-red-600 p-8 rounded-lg'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900'>VENEZ PRENDRE LE THÉ</h2>
                    <form>
                    <div className='flex mb-4'>
                            <div className='w-1/2 mr-2'>
                                <label htmlFor='nom' className='block mb-2 text-sm font-medium text-gray-900'>Nom</label>
                                <input type='text' id='nom' className='bg-red-600 border border-red-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor='prenom' className='block mb-2 text-sm font-medium text-gray-900'>Prénom</label>
                                <input type='text' id='prenom' className='bg-red-600 border border-red-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>E-mail</label>
                            <input type='email' id='email' className='bg-red-600 border border-red-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900'>Message</label>
                            <textarea id='message' rows={4} className='bg-red-600 border border-red-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'></textarea>
                        </div>
                        <div className='flex justify-between items-center mb-8'>
                            <button type='button' className='px-4 py-2 bg-red-600 text-white text-sm rounded-lg'>Télécharger un CV (jpg, pdf)</button>
                            <button type='reset' className='px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-lg'>Effacer</button>
                            <button type='submit' className='px-4 py-2 bg-red-600 text-white text-sm rounded-lg'>Envoyer</button>
                        </div>
                    </form>
                    <a href='#' className='inline-block text-red-600 text-sm'>RETOUR À L'ACCUEIL</a>
                </div>
            </div>
        </div>
    );
}
