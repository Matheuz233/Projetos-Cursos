import "./App.css";

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// Context
import { AuthProvider } from "./context/AuthContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";

function App() {
  // Lógica de Chamada do Usário e Monitoramento de Usuário
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              {/* Bloqueando Páginas que Precisam de Autenticação */}
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
