'use client';

import React, { useState } from 'react';
import { Button, Input, Checkbox, Link, Form, Image } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '@hooks/useAuth';

export default function LoginForm() {
    const [isVisible, setIsVisible] = React.useState(false);
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(username, password);
        } catch (err: any) {
            setError(err.message || 'Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex h-full w-full items-center justify-center'>
            <div className='flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6'>
                <div className='pb-4'>
                    <Image src='assets/icons/logo-dark.png' alt='logo' />
                </div>
                <Form
                    className='flex flex-col gap-4'
                    validationBehavior='native'
                    onSubmit={handleSubmit}
                >
                    <Input
                        isRequired
                        label='Username'
                        labelPlacement='outside'
                        name='username'
                        placeholder='Enter your username'
                        type='text'
                        variant='bordered'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        isRequired
                        endContent={
                            <button type='button' onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon
                                        className='pointer-events-none text-2xl text-default-400'
                                        icon='solar:eye-closed-linear'
                                    />
                                ) : (
                                    <Icon
                                        className='pointer-events-none text-2xl text-default-400'
                                        icon='solar:eye-bold'
                                    />
                                )}
                            </button>
                        }
                        label='Password'
                        labelPlacement='outside'
                        name='password'
                        placeholder='Enter your password'
                        type={isVisible ? 'text' : 'password'}
                        variant='bordered'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='flex w-full items-center justify-between px-1 py-2'>
                        <Checkbox defaultSelected name='remember' size='sm'>
                            Remember me
                        </Checkbox>
                        <Link className='text-default-500' href='#' size='sm'>
                            Forgot password?
                        </Link>
                    </div>
                    {error && <p className='text-red-500 text-sm'>{error}</p>}
                    <Button
                        isLoading={loading}
                        className='w-full'
                        color='primary'
                        type='submit'
                    >
                        Log In
                    </Button>
                </Form>
                <p className='text-center text-small'>
                    <Link href='#' size='sm' className='text-default'>
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}
