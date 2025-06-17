import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const MainLayouts = () => {
  const location = useLocation();

  return (
    <div>
      <header className="mb-20">
        <Header />
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ position: "relative" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
