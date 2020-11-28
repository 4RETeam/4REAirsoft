import React from 'react';
import Layout from 'pages/components/Layout/Layout';

const UserDashboard = (props: any) => {

    return (
        <Layout title="Dashboard">
<h1>pizdec</h1>
        </Layout>
    );
};

UserDashboard.getInitialProps = (res: any) => {
    const { query } = res;
    return {
        ...query,
    };
};

export default UserDashboard;
