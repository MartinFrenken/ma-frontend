import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
import Router from "next/router";


const Auth0CallbackPage = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {

      setTimeout(  ()=> handleAuthentication({ postLoginRoute: "/" }),1000);

    }, []);

    return (
            <h1>
                This is the auth callback page, you should be redirected
                immediately.


            </h1>

    );
};

export default Auth0CallbackPage;