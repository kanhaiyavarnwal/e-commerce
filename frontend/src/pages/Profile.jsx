


import React from "react";

export default function Profile() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      
      {/* Loader */}
      <div className="w-10 h-10  border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>

      {/* Message */}
      <p className="mt-5 text-gray-600 text-sm">
        This feature is coming soon...
      </p>

    </div>
  );
}







// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const navigate = useNavigate();

//   const user = {
//     name: "Kanhaiya Varnwal",
//     email: "kanhaiya@gmail.com",
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10">
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-semibold text-gray-900">
//             My Profile
//           </h1>
//           <p className="text-gray-500 mt-1">
//             Manage your account and orders
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* Profile Card */}
//           <div className="bg-white border rounded-lg p-6">
//             <div className="flex flex-col items-center text-center">

//               {/* Avatar */}
//               <div className="w-24 h-24 rounded-full bg-gray-900 text-white flex items-center justify-center text-3xl font-semibold">
//                 {user.name.charAt(0)}
//               </div>

//               <h2 className="mt-4 text-xl font-medium">
//                 {user.name}
//               </h2>

//               <p className="text-gray-500 text-sm mt-1">
//                 {user.email}
//               </p>

//               <button
//                 onClick={() => navigate("/edit-profile")}
//                 className="mt-5 w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
//               >
//                 Edit Profile
//               </button>
//             </div>
//           </div>

//           {/* Account Options */}
//           <div className="md:col-span-2 bg-white border rounded-lg p-6">

//             <h2 className="text-xl font-medium mb-5">
//               Account
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               {/* Orders */}
//               <button
//                 onClick={() => navigate("/orders")}
//                 className="text-left border rounded-lg p-5 hover:bg-gray-50 transition"
//               >
//                 <h3 className="font-medium text-lg">
//                   My Orders
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-1">
//                   View and track your orders
//                 </p>
//               </button>

//               {/* Address */}
//               <button
//                 onClick={() => navigate("/address")}
//                 className="text-left border rounded-lg p-5 hover:bg-gray-50 transition"
//               >
//                 <h3 className="font-medium text-lg">
//                   Addresses
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-1">
//                   Manage your delivery addresses
//                 </p>
//               </button>

//               {/* Wishlist */}
//               <button
//                 onClick={() => navigate("/wishlist")}
//                 className="text-left border rounded-lg p-5 hover:bg-gray-50 transition"
//               >
//                 <h3 className="font-medium text-lg">
//                   Wishlist
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-1">
//                   View your saved products
//                 </p>
//               </button>

//               {/* Settings */}
//               <button
//                 onClick={() => navigate("/settings")}
//                 className="text-left border rounded-lg p-5 hover:bg-gray-50 transition"
//               >
//                 <h3 className="font-medium text-lg">
//                   Settings
//                 </h3>
//                 <p className="text-gray-500 text-sm mt-1">
//                   Manage account settings
//                 </p>
//               </button>

//             </div>

//             {/* Logout */}
//             <button
//               onClick={handleLogout}
//               className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
//             >
//               Logout
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

