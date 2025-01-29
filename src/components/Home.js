import { useContext, useEffect, useState } from 'react';
import { ScreenContext } from '../contexts/ScreenContext.js';

function Home() {

    const { width } = useContext(ScreenContext);
    if (width >= 1450) {
        console.log('xl')
    }
    else if (width >= 1280 && width < 1450) {
        console.log('large')
    } else if (width < 1280 && width >= 1000) {
        console.log('medium')
    } else {
        console.log('small')
    }

    return (
        <h1></h1>
    );
}

export default Home;