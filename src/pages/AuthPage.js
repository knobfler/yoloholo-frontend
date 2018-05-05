import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import AuthContainer from 'containers/Auth/AuthContainer';

const AuthPage = () => {
    return (
        <PageTemplate>
            <AuthContainer/>
        </PageTemplate>
    );
};

export default AuthPage;