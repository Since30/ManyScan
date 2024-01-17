import React from 'react';
import Login from '../../components/auth/LoginForm';
import Register from '../../components/auth/RegisterForm';
import Router from 'next/router';
import Header from '@/components/Headers';

const Auth = () => {
    const handleBack = () => {
        Router.push('/');
    };
    return (
        <div className='bg-background-primary h-screen py-6'>
            <Header />
            <div className='flex items-center justify-center gap-24 my-10'>
                <Login />
                <Register />
            </div>
        </div>
    );
};

export default Auth;
