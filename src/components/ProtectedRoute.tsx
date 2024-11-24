import React, { useState, useEffect } from "react";
import { Route, Navigate, Params } from "react-router-dom"; // Ensure RouteProps is imported correctly
import { supabase } from "../supabaseClient"; // Import your Supabase client
import { Session } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  element: React.ReactNode;
  params: Params;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  ...rest
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <Route
      {...rest}
      element={session ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
