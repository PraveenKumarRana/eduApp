import React from 'react';

const LoaderScreen = () => {
    const style = {height:"100%", width:"100%"}
    return (
        <div style={style} className="loader-page">
            <div className="loader-icon">

            </div>
            <p>Page is loading... Please wait.</p>
        </div>
    )
}

export default LoaderScreen;