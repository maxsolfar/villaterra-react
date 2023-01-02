import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {NavBar} from "./components";
import { ForgotPassword, Home, Offers, Profile, SignIn, SignUp } from "./pages";


function App() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(()=>{
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <main className="bg-light dark:bg-dark">
      <NavBar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </main>
  );
}

export default App;
