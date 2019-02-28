import React from 'react';

export interface HandleQueryProps {
    loading: boolean;
    error?: Error;
}

export const HandleQuery: React.FC<HandleQueryProps> = ({
    loading,
    error,
    children
}) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return children;
};
