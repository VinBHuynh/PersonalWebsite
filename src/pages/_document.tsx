import { Head } from "next/document";
import { Main } from "next/document";
import { NextScript } from "next/document";
import { Html } from "next/document";
import React from "react";

const document = () => <Html>
    <Head />
    <body>
        <Main />
        <NextScript />
    </body>
</Html>

export default document;