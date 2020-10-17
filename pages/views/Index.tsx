import Head from 'next/head';
import { useRef, useState } from 'react';
const Index = (props: any) => {
  const [checkout, setCheckout] = useState(true);

  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <h1>{props.title}</h1>
        {checkout?(
            <div>
            </div>
        ):(
            <button 
                onClick={
                    ()  =>  {setCheckout(true);}
                }
            >
                Checkout
            </button>
        )}
    </div>
  );
};

Index.getInitialProps = (res: any) => {
  const { query } = res;
  return {
    ...query,
  };
};

export default Index;