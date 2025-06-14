import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto mt-3">
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;