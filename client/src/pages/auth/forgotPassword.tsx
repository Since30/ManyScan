import React, { useState } from 'react';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Un email de réinitialisation a été envoyé si l\'adresse est reconnue.');
            } else {
                throw new Error('Réponse du serveur non valide.');
            }
        } catch (error) {
            setMessage('Une erreur s\'est produite lors de la demande de réinitialisation du mot de passe.');
        }
    };
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8'>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label
                        htmlFor='email'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-light'>
                        Votre email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                <button
                    type='submit'
                    className='text-light bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Réinitialiser le mot de passe
                </button>

                {message && <p className='mt-4 text-sm'>{message}</p>}
            </form>
        </div>
    </div>
);
}