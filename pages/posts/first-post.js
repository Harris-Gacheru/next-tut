import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>

            <Image
                src='/images/profile.jpg'
                height={150}
                width={150}
            ></Image>

            <h1 className='text-3xl font-bold'>First Post</h1>
            <h2><Link href='/'>Back home</Link></h2>
        </>
    )
}