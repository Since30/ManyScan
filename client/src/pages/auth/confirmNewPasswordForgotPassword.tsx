import React, { FormEvent, useState } from 'react';


export default function confirmNewPasswordForgotPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleNewPassword = async (event: FormEvent<HTMLFormElement>) => {
//TODO
    //vérifier new password match to confirmPassowrd
    //call back-end to 'http://localhost:8080/api/auth/new-password'

        try{

        } catch(error){

        }
    }
  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8'>
            <form onSubmit={handleNewPassword}>
                      <div className='mt-3'>
                    <label
                        htmlFor='newPassword'
                        className='block text-sm font-medium text-gray-900 dark:text-light'>
                        Nouveau mot de passe
                    </label>
                    <input
                        type='password'
                            id='newPassword'
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            required
                    />
                </div>
                <div className='mt-3'>
                    <label
                        htmlFor='confirmNewPassword'
                        className='block text-sm font-medium text-gray-900 dark:text-light'>
                        Confirmez votre nouveau mot de passe
                    </label>
                    <input
                        type='password'
                            id='confirmNewPassword'
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            required
                    />
                </div>
                <button
                    type='submit'
                    className='text-light mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Réinitialiser votre nouveau mot de passe
                </button>
            </form>
        </div>
    </div>        
    </>
  )
}
