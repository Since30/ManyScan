import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../pages/auth/authContext';
import ForgotPasswordModal from '../../pages/auth/ForgotPasswordModal';
import CardsContainer from '@/components/cards/CardsContainer';
import CardTitle from '../cards/CardTitle';

export default function LoginForm() {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'http://localhost:8080/api/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            const userData = await response.json();

            const { username, token, id } = userData; // Récupération du username et du token
            const role = userData.role || 'User';

            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('userId', id);

                login({ username, token, role, id }); // Mise à jour de l'état avec le token et le username
                router.push('/'); // Redirection vers la page d'accueil
            } else {
                console.error('Token non reçu');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    const handleForgotPassword = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage('');
    };

    return (
        <div className='flex flex-col w-1/3'>
            <CardTitle title='Connexion' />
            <CardsContainer tailwindClass='flex flex-col p-5 gap-6'>
                <div className='flex flex-col gap-2'>
                    <h3>RAVIE DE VOUS RETROUVER !</h3>
                    <p className='text-sm text-element-primary font-thin'>
                        Reprenez tous vos mangas favoris là où vous les avez laissés !
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-6 my-4 text-background-secondary'>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='E-MAIL'
                        />

                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-element-secondary placeholder:text-background-secondary text-sm rounded-lg w-full p-2.5 outline-none border-3 border-element-secondary focus:bg-background-secondary focus:border-3 focus:border-element-secondary focus:text-element-secondary focus:placeholder:text-element-secondary'
                            placeholder='MOT DE PASSE'
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <input
                            type='checkbox'
                            id='remember'
                            value='1'
                            className='hidden peer/login'
                            required
                        />
                        <label
                            htmlFor='remember'
                            className='flex items-center hover:cursor-pointer before:w-3 before:h-3 peer-checked/login:before:bg-element-primary before:rounded-sm before:block before:mr-2 before:border-2 before:border-element-secondary text-element-primary'>
                            {' '}
                            Se souvenir de moi
                        </label>
                        <div>
                            <button
                                type='submit'
                                className='border-3 rounded-lg border-element-secondary text-element-secondary hover:bg-element-secondary hover:text-background-primary hover:scale-105 transition-all ease-in-out duration-150 font-bold text-sm py-2.5 px-5'>
                                Se connecter
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <a
                            onClick={handleForgotPassword}
                            className='underline text-element-primary'>
                            Mot de passe oublié ?
                        </a>
                        {showModal && (
                            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50'>
                                <div className='bg-white p-6 rounded-lg'>
                                    <ForgotPasswordModal
                                        closeModal={closeModal}
                                    />
                                </div>
                                <button onClick={closeModal}>Fermer</button>
                            </div>
                        )}
                    </div>
                </form>
            </CardsContainer>
        </div>
    );
}
