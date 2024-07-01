import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

export default function ProjectsList() {
    return (
        <>
        <Head>
            <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
                rel="stylesheet"
            />
            <title>Projects</title>
            <link rel="stylesheet" href="../stylesheets/styles.css" />
            </>
        </Head>
        <p>Projects List</p>
        </>
    )
}