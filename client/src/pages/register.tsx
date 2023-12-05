import React, { useState, FormEvent } from 'react';

interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
        console.log("Envoi des données du formulaire:", JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
      }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword
                }),
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            alert("Inscription réussie !");
        } catch (error) {
            alert("Erreur lors de l'inscription : " + error);
        }
    };
    return (
        <div className='relative h-screen bg-gray-100'>
            <div className='absolute inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-md'></div>
    
            <div className='flex justify-center items-center h-screen'>
                <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8 z-10 relative'>
                    <form onSubmit={handleSubmit}>
                      <div className='mb-6'>
                        <label 
                        htmlFor='username'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-light'>
                          Votre pseudo
                        </label>
                        <input
                          type='text'
                          id='username'
                          value={formData.username}
                          onChange={handleChange}
                          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                          required
                        />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-light'>
                                Votre email
                            </label>
                            <input
                                type='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-light'>
                                Mot de passe
                            </label>
                            <input
                                type='password'
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor='confirmPassword'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-light'>
                                confirmer le mot de passe
                            </label>
                            <input
                                type='password'
                                id='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor='terms' className='inline-flex items-center'>
                                <input
                                    type='checkbox'
                                    id='terms'
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className='form-checkbox'
                                    required
                                />
                                <span className='ml-2 text-sm font-medium text-gray-900 dark:text-light'>
                                    J'accepte les{' '}
                                    <a href='#' className='underline'>
                                        conditions d'utilisation
                                    </a>
                                </span>
                            </label>
                        </div>
                        <button
                            type='submit'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Inscription nouvelle utilisateurs
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;