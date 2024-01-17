import { useState, FormEvent } from 'react';
import CardsContainer from '../cards/CardsContainer';
import CardTitle from '../cards/CardTitle';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        const userData = {
            username,
            email,
            password,
            confirmPassword,
        };

        try {
            const response = await fetch(
                'http://localhost:8080/api/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Une erreur est survenue lors de l'inscription"
                );
            }

            alert('Inscription réussie');
            // Gérer la réponse ici, comme la redirection vers une autre page
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className='w-1/3'>
            <CardTitle title='Inscription' />
            <CardsContainer tailwindClass='flex flex-col gap-5 p-5'>
                <div>
                    <h3 className='uppercase'>Enchanté de vous connaitre !</h3>
                    <p className='text-sm text-element-primary font-thin'>
                        Créez un compte pour enregistrer vos favoris et gardez
                        une trace de vos mangas commencés !
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3 text-background-secondary'>
                        <input
                            type='text'
                            id='name'
                            onChange={(e) => setUsername(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='PSEUDO'
                            required
                        />

                        <input
                            type='email'
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='E-MAIL'
                            required
                        />

                        <input
                            type='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='MOT DE PASSE'
                            required
                        />

                        <input
                            type='password'
                            id='confirmPassword'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='CONFIRMER LE MOT DE PASSE'
                            required
                        />
                    </div>
                    <div className='flex flex-row-reverse gap-2 my-6'>
                        <input
                            type='checkbox'
                            id='terms'
                            value='1'
                            className='hidden peer/terms'
                            required
                        />
                        <label
                            htmlFor='terms'
                            className='flex items-center hover:cursor-pointer before:w-3 before:h-3 peer-checked/terms:before:bg-element-primary before:rounded-sm before:block before:mr-2 before:border-2 before:border-element-secondary text-element-primary'>
                            J'accepte les termes et conditions d'utilisation
                        </label>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className='border-3 rounded-lg border-element-secondary text-element-secondary hover:bg-element-secondary hover:text-background-primary hover:scale-105 transition-all ease-in-out duration-150 font-bold text-sm py-2.5 px-5'>
                            S'inscrire
                        </button>
                    </div>
                </form>
            </CardsContainer>
        </div>
    );
}
