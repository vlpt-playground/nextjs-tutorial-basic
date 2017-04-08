import Link from 'next/link'
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => (
    <Layout>
        <Head>
            <title>
                Index 페이지
            </title>
        </Head>
        <h1>
            안녕, Next.js
        </h1>
        <h2>
            <Link href="/about">
                <a style={{background: 'black', color: 'white'}}>소개</a>
            </Link>
        </h2>
    </Layout>
);

export default Index;