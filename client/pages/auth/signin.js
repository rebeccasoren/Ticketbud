import { useState, useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email,
            password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async event => {
        event.preventDefault();

        await doRequest();
    };

    return (
        <div class="main">
            <p class="sign" align="center">Sign In</p>
            <form class="form1" onSubmit={onSubmit}>
                <input class="un" type="text" align="center" placeholder="Email Address" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input class="pass" type="password" align="center" placeholder="Password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" />
                <button class="submit" align="center">Sign in</button>
                <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
                </form>
                {errors}
            </div>
    );
};
