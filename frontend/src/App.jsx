// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
// import { Dashboard } from "./pages/Dashboard";
// import { SendMoney } from "./pages/SendMoney";
// import { Landing } from "./pages/Landing";

// function App() {
//   return (
//     <>
//        <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/send" element={<SendMoney />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Landing } from "./pages/Landing";
import { ProtectedRoute } from "./components/ProtectedRoute"; 
import { PublicOnlyRoute } from "./components/PublicOnlyRoute"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />
        <Route path="/signin" element={<PublicOnlyRoute><Signin /></PublicOnlyRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/send" element={<ProtectedRoute><SendMoney /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

