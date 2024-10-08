import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import Appbar from './Appbar.jsx';
import AddCourse from './AddCourse.jsx';

function App() {
    
    return (
      <div>
        <Appbar></Appbar>
        <Router>
            <Routes>
                <Route path="/add" element={<AddCourse />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
           
            </Routes>
        </Router>
      </div>
    );
}

export default App;








// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// //import Signin from "./Signin.jsx";
// import Signup from "./Signup.jsx";
// import Appbar from "./Appbar.jsx";

// function App() {
//   return (
//     <div>
//       <Appbar></Appbar>
//       <Router>
//         <Routes>
//            <Route path={"/signin"} element={<Signin />} /> 
//            <Route path={"/signup"} element={<Signup />} /> 
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



// import Appbar from "./Appbar.jsx";
// import Signup from "./Signup.jsx";


// function App() {
//   return (
//     <div style={{width: "100vw",
//                 height: "1088vh",
//                 backgroundColor: "#eeeeee"}}>
//                   <Appbar />
//                   <Signup />
                  
                  
//     </div>
//   );
// }

// export default App;




