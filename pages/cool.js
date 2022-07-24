import Head from "next/head";

export default function cool() {

    return (
        <div>
            <Head>
                <title>Cool Page In Next.JS</title>
                <meta name= 'cool page' content='very cool content'/>
            </Head>
            <header>
                <h1>A heading here</h1>
                <p>Posted by John Doe</p>
                <p>Some additional information here</p>
            </header>
            <h1>Cool</h1>
        </div>
    )

}
