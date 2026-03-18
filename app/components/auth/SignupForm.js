// "use client";
// import { useState } from "react";
// import { signUpWithEmailAndPassword } from "@/app/lib/authHelpers";

// export default function SignupForm(){
// //state: email, password, success flag, error state, loading flag
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [success, setSuccess] = useState(false);
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState (false);

// //submit function (Don't refresh page)
// const handleSubmit = async (e) => {
//     // remove default prevention if we have a from action for post signup
//     e.preventDefault();
//     setUserProperties(null);
//     setSuccess(false);
//     try {
//     setLoading(true);
//     const { user, error} = await signUpWithEmailAndPassword(email, password); 
//     } catch (error){
//         setUserProperties(error);
//     } finally {
//         setLoading(false);
//     }
// };

// return <form> onSubmit={handleSubmit} 
// <div>
//     <label> </label>
//     </div></form>;
// }