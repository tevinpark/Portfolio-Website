import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    const { id } = router.query
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
            <title>{id}</title>
            <link rel="stylesheet" href="../stylesheets/styles.css" />
            </>
        </Head>
        <p>{id}</p>
        </>
    )
}