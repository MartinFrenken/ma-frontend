import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { AuthProvider } from "react-use-auth";

import 'antd/dist/antd.css';


class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (

            <React.Fragment>
                <AuthProvider
                    navigate={()=>{this.navigate()}}

                    auth0_domain="dev-on-fhj05.eu.auth0.com"
                    auth0_client_id="XBOSCR18AEn4i7wd0x2IFR6U86vthdT2"
                    redirectUri= "http://localhost:3000/callback"
                >
                    <Component {...pageProps} />
                </AuthProvider>
            </React.Fragment>

        );
    }
    navigate(){
      Router.push("/");
    }
}
export default MyApp
