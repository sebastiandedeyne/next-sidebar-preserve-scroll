import "../styles/app.css";

import React from "react";
import App, { Container } from "next/app";
import Sidebar from "../components/Sidebar";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <div className="flex">
                    <div className="w-1/4 bg-gray-200">
                        <Sidebar />
                    </div>
                    <div className="w-3/4">
                        <Component {...pageProps} />
                    </div>
                </div>
            </Container>
        );
    }
}

export default MyApp;
