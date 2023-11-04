import React from 'react';

export default function RegisterForm() {
    return (
        <>
            <form>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Pseudo
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                       Votre email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="terms" className="inline-flex items-center">
                        <input type="checkbox" id="terms" value="1" className="form-checkbox" required />
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                            J'accepte les <a href="#" className="underline">conditions d'utilisations</a>
                        </span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                   Inscription nouvelle utilisateurs
                </button>
            </form>
        </>
    );
}

       


