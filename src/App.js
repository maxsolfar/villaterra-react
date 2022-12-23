import { Route, Routes } from "react-router-dom";
import {NavBar} from "./components";
import { ForgotPassword, Home, Offers, Profile, SignIn, SignUp } from "./pages";

function App() {
  return (
    <main>
      <NavBar />
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
