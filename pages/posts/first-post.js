import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>Back <Link href='/'>home</Link></h2>
        </>
    )
}