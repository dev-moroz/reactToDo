import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="bg-slate-800 h-screen w-full">
            {children}
        </div>
    )
}

export default Layout