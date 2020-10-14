import Head from 'next/head';
const Index = (props: any) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <h1>{props.title}</h1>
        </div>
    );
}

Index.getInitialProps = (res: any) => {
    const { query } = res;
    return {
        ...query
    }
}

export default Index;