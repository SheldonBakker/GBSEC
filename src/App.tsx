import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gbmed from "./components/Gbmed";
import Academy from "./components/Academy";
import Psira from "./components/Psira";
import Specialops from "./components/Special";
import Range from "./components/Range";
import Scopes from "./components/Scopes";
import AmmunitionPage from "./components/Ammunition";
import Login from "./components/Login";
import { supabase } from "./supabaseClient";
import Accessories from "./components/Accessories";
import Footer from "./components/Fixed";

const App: React.FC = () => {
  const [, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      console.log("Session Data:", data); // Log session data
      setIsLoggedIn(!!data.session);
    };

    checkSession();

    // Subscribe to authentication state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription.unsubscribe(); // Clean up subscription
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gbmed" element={<Gbmed />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/psira-grades" element={<Psira />} />
          <Route path="/special-op" element={<Specialops />} />
          <Route path="/gunshop/scopes" element={<Scopes />} />
          <Route path="/gunshop/shooting-range" element={<Range />} />
          <Route path="/gunshop/accessories" element={<Accessories />} />
          <Route path="/gunshop/ammunition" element={<AmmunitionPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
