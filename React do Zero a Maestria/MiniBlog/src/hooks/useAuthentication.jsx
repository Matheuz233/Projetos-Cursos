import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { set } from "firebase/database";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Hook de limpeza para tirar resquícios de funções
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  // Função para lidar com vazamento de memória
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Função de Registro
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);

    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter ao menos 6 caracteres";
      } else if (error.message.includes("auth/email-already-in-use")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // Função de Logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  // Função de Login
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error);

      let systemErrorMessage;

      if (error.message.includes("auth/invalid-credential")) {
        systemErrorMessage = "Usuário ou Senha Inválidos";
      } else {
        systemErrorMessage =
          "Ocorreu um erro, tente novamente mais tarde!";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
