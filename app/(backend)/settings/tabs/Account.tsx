import React, { useState } from 'react';
import { Button, Form, Input } from '@heroui/react';

type Props = {};

const Account = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const errors: string[] = [];

    const onSubmit = (e: any) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // logic to update data
    };
    return (
        <Form className='w-full max-w-lg gap-4' onSubmit={onSubmit}>
            <Input
                errorMessage={({ validationDetails, validationErrors }) => {
                    if (validationDetails.typeMismatch) {
                        return 'Please enter a valid username';
                    }

                    return validationErrors;
                }}
                label='Username'
                name='username'
                placeholder='Enter your username'
                type='text'
                variant='underlined'
                fullWidth
            />
            <Input
                errorMessage={({ validationDetails, validationErrors }) => {
                    if (validationDetails.typeMismatch) {
                        return 'Please enter a valid email';
                    }

                    return validationErrors;
                }}
                label='Email'
                name='email'
                placeholder='Enter your Email'
                type='email'
                variant='underlined'
                fullWidth
            />
            <Input
                errorMessage={() => (
                    <ul>
                        {errors.map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                )}
                isInvalid={errors.length > 0}
                name='password'
                placeholder='Enter your password'
                value={form.password}
                variant='underlined'
                fullWidth
                type='password'
                onValueChange={(value) => setForm({ ...form, password: value })}
            />
            <Input
                errorMessage={() => (
                    <ul>
                        {errors.map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                )}
                isInvalid={errors.length > 0}
                name='confirm password'
                placeholder='Repeat your password'
                value={form.confirmPassword}
                variant='underlined'
                fullWidth
                type='password'
                onValueChange={(value) =>
                    setForm({ ...form, confirmPassword: value })
                }
            />
            <Button
                color='primary'
                type='submit'
                size='sm'
                className='mt-4'
                isLoading={loading}
            >
                Update Information
            </Button>
            {message && (
                <div className='text-small text-default-500'>{message}</div>
            )}
        </Form>
    );
};

export default Account;
