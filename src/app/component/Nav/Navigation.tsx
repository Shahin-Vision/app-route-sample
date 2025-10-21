import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about-us">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

// import React from "react";

// export default function Navigation() {
//   return (
//     <div>
//       <ul className="nav nav-underline">
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="/">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/products">
//             Products
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/about-us">
//             About Us
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/contact-us">
//             Contact Us
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }