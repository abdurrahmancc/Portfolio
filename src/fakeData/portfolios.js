import eshop from "../assets/e-shopi.png";
import cookies from "../assets/coockies.png";
import support from "../assets/support_app.png";
import jobdesk from "../assets/jobdesk.png";
import dashboard from "../assets/dashboard.png";
import jobdesk_enterprise from "../assets/jobdesk_enterprise.png";
import DBSchemaUpdateTool from "../assets/DBSchemaUpdateTool.png";
import Courierly from "../assets/Courierly.png";
const portfolios = [
  {
    id: "1",
    name: "Jobdesk® Home App",
    img: jobdesk,
    brand: "An Recruiter Service Provider Website",
    liveSite: "https://jobdesk.com/",
    client: "",
    server: "",
    exists: [
      "Implemented country-based banner image slider",
      "Implementation country-based languages",
      "login authentication system implement",
      "The website is responsive for mobile, tab, and PC.",

    ],
    technology:
      "Angular, Bootstrap, SCSS",
    description:
      "This is the official website of a jobdesk. and 'jobdesk.com' is a legitimate website related to job search, career information, or any other job-related services. this platform provides job listings, career resources, and networking opportunities for job seekers.",
  },
  {
    id: "9",
    name: "Jobdesk® Enterprise",
    img: jobdesk_enterprise,
    brand: "An HR tool in .NET Core 8 for managing candidates and reports via Syncfusion",
    liveSite: "https://jdentapi.jobdesk.com/",
    client: "",
    server: "",
    exists: [
      "Candidate Profile Management",
      "Interview Scheduling & Attendance Tracking.",
      "Dynamic Reporting with Syncfusion",

    ],
    technology:
      ".NET 8 MVC, MySQL, MSSQL, Bootstrap, HTML5, CSS, JavaScript, jQuery, AJAX etc.",
    description: "Jobdesk® Enterprise is an advanced HR management tool built with .NET Core 8. It streamlines candidate tracking, interview scheduling, and dynamic reporting using Syncfusion. Designed for efficiency and clarity, it helps HR teams manage end-to-end recruitment workflows seamlessly.",
  },
  {
    id: "12",
    name: "Courierly",
    img: Courierly,
    brand: "Courierly is a full-stack multi-role Parcel Management System for managing and tracking parcel bookings and deliveries efficiently.",
    liveSite: "https://courierly.web.app/login",
    client: "https://github.com/abdurrahmancc/Courierly",
    server: "https://github.com/abdurrahmancc/Courierly-server",
    exists: [
      "We have implemented fully dynamic role-based dashboards",
      "Real-time notifications optimized using Socket.IO",
      "Comprehensive parcel management with multi-role access.",
    ],
    technology: "Node.js, Express, MongoDB, Mongoose, JWT, Socket.IO, React, Tailwind CSS, DaisyUI",
    description: "Courierly is a full-stack parcel management web application built for admins, customers, and delivery agents. It enables easy parcel booking, real-time tracking, and efficient delivery management through dynamic dashboards and notifications."
  },
  {
    id: "10",
    name: "DBSchemaUpdateTool",
    img: DBSchemaUpdateTool,
    brand: "WinForms-based .NET 8 tool for SQL schema comparison and script generation",
    liveSite: "",
    client: "https://github.com/abdurrahmancc/dbschemaupdatetool",
    server: "",
    exists: [
      "Schema Comparison Engine",
      "Auto-Generated SQL Scripts.",
      "Migration-Free & Manual Control",
      "Anchor Object Tracking",
      "Multi-Database Support",

    ],
    technology:
      ".NET 8 WinForms, C#, MySQL, JSON Config.",
    description: "DBSchemaUpdateTool is a precision-driven schema management utility built with .NET Core 8. It enables seamless schema comparison, auto-generates SQL scripts, and supports both MySQL and MSSQL. With anchor object tracking and full manual control without migrations, it ensures safe and efficient database updates across multiple environments."
  },
  {
    id: "11",
    name: "Excel Add-in Tool",
    img: "",
    brand: "VSTO-based Excel Add-in for anonymizing and validating candidate data",
    liveSite: "",
    client: "https://github.com/abdurrahmancc/Excelimportdatacleaner",
    server: "",
    exists: [
      "Email, Phone Number, and Name Anonymization",
      "Invalid Email and Date Detection with Cleanup",
      "Max Row Limiting (Keeps only Top 100)",
      "Recruiters/Data Handlers",
      "Performance-focused (preventing bloat, simplifying validation)"

    ],
    technology:
      "C#, .NET Framework, VSTO, Excel Interop, WinForms, Regex, File I/O",
    description: "The Excel Add-in Tool is a specialized VSTO-based extension designed for HR and recruitment data processing. It anonymizes sensitive fields like email, phone numbers, and names to ensure privacy, while detecting and cleaning invalid emails and improperly formatted dates. With built-in logic to retain only the top 100 rows, it prevents file bloat and ensures data relevance. Tailored for recruiters and data handlers, the tool simplifies large dataset validation directly within Excel."
  },
  {
    id: "2",
    name: "Jobdesk® PLACE",
    img: dashboard,
    brand: "An Recruiter Service Provider Website",
    liveSite: "https://sas.jobdesk.com/",
    client: "",
    server: "",
    exists: [
      "Here different designs are implemented for recruiters, candidate and company",
      "It has a dashboard for admin. Also can control everything.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp forms to count users.",
    ],
    technology:
      "Angular, angular material, SCSS, ng2-charts, ng5-slider, etc",
    description:
      "This is the official website of a jobdesk. and 'jobdesk.com' is a legitimate website related to job search, career information, or any other job-related services. this platform provides job listings, career resources, and networking opportunities for job seekers.",
  },
  {
    id: "3",
    name: "Fresh",
    img: "https://i.ibb.co/HFZS4F0/fresh.png",
    brand: "A Independent Service Provider Website",
    liveSite: "https://fresh-a3f88.web.app/",
    client: "https://github.com/abdurrahmancc/fresh-app",
    server: "https://github.com/abdurrahmancc/fresh-app-server",
    exists: [
      "Items of different categories are displayed in the form of grid columns on the home page.",
      "It has a dashboard for admin. Where admin can add different products. Also can control everything.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp forms to count users.",
    ],
    technology:
      "React, Redux, Node, firebase, Express, MongoDB, Mongoose, JWT, Tailwind CSS, Stripe.js, Axios, React Query",
    description:
      "Fresh is a beautiful, modern, and responsive Organic Food Store and multipurpose E-commerce template based on React, Redux, Node, and Tailwind CSS. Fresh is specially designed for multipurpose shops like grocery stores, supermarkets, organic shops, and online stores selling products like beverages, vegetables, fruits, paste, herbs, juice, meat, cold drinks, sausages, cocktails, soft drinks, and cookies. Additionally, it is perfect for eco-product stores, fresh bread, bakery shops, and even natural cosmetics stores.",
  },
  {
    id: "4",
    name: "E-Shopi",
    img: eshop,
    brand: "A Independent Service Provider Website",
    liveSite: "https://e-shop-demo.vercel.app/",
    client: "https://github.com/abdurrahmancc/E-shop-",
    server: "",
    exists: [
      "3 e-commerce Home Pages & 20+ e-commerce inner Pages",
      "We have provided a lot of useful built-in components for very easy to customize",
      "The website is SEO & user Friendly also, responsive for mobile, tab, and PC",
      "sample user dashboard",
    ],
    technology:
      "NextJS, React, Redux toolkit, TypeScript, Tailwind CSS, Daisyui, React-slider, Swiper,React-hook-form, react-toastify, etc.",
    description:
      "E-Shopi - is a super fast e-commerce template. Built with React, NextJS, TypeScript, Nest JS & Tailwind Css, our template promises to deliver an interface for your business that is quick and easy to set up! also, it is a beautiful, modern, and responsive electronic Store and multipurpose E-commerce template based on React, Next js, Redux, and Tailwind CSS. E-Shopi is specially designed for multipurpose shops like electronic stores, supermarkets, and online stores selling products like Smart Phone, headphones, monitors, computers, laptops, Cameras,s and Smartwatches. Additionally, it is perfect for electronic stores and online shops.",
  },
  {
    id: "5",
    name: "Cookies Bakery",
    img: cookies,
    brand: "A Independent Service Provider Website",
    liveSite: "https://cookies-shop.vercel.app/",
    client: "https://github.com/abdurrahmancc/cookies-shop",
    server: "",
    exists: [
      "02 Awesome Homepage Versions. and 15+ Total Pages.",
      "Good color combination and Super Clear and Clean Layout.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp forms to count users.",
    ],
    technology:
      "Next Js, React, Redux toolkit, Tailwind CSS, TypeScript, DaisyUI, Axios, React Query, react-slider, swiper ",
    description:
      "Cookies Bakery - Modern eCommerce Template is modern, clean, and professional Template”. It has 2 homepage layouts Options! This template suits any type of eCommerce, Cookie Shop, stores, online shop. Additionally, it is perfect for Cookie Shop and online shops. The design is very easy to customize.",
  },
  {
    id: "6",
    name: "Support App",
    img: support,
    brand: "A Independent Service Provider Website",
    liveSite: "https://support-29169.web.app/inbox",
    client: "https://github.com/abdurrahmancc/support",
    server: "https://github.com/abdurrahmancc/support-server",
    exists: [
      "A ticket system has been developed to support the user",
      "Good color combination and Super Clear and Clean Layout.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp full functionality",
    ],
    technology:
      "React, Redux, socket.io, Tailwind CSS, TypeScript, DaisyUI, Axios, React Query, react-hook-form, Firebase",
    description:
      "This is a ticket system support application. A ticket system has been developed to support the user. If you are working on marketplaces like ThemeForest then you can use it. If any user wants support then you can provide support through this app",
  },
  {
    id: "7",
    name: "AWS",
    img: "https://i.ibb.co/cvBLk7K/aws.jpg",
    brand: "A Independent Service Provider Website",
    liveSite: "https://aws-ac1fd.firebaseapp.com/",
    client: "https://github.com/abdurrahmancc/aws",
    server: "https://github.com/abdurrahmancc/aws-server",
    exists: [
      "Items of different categories are displayed in the form of grid columns on the home page.",
      "It has a dashboard for admin. Where admin can add different products. Also can control everything.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp forms to count users.",
    ],
    technology:
      "React, Node, firebase(authentication), MongoDB, Express, JWT, Tailwind CSS, Daisyui, Axios, React Query",
    description:
      "This is a full-stack responsive AWS project where users can purchase any product. Which is made with React and tailwind CSS. Items of different categories are displayed in the form of grid columns on the home page. The website is responsive for mobile, tab, and PC. Implemented Login and SignUp forms to count users.",
  },
  {
    id: "8",
    name: "Doctors Portal",
    img: "https://i.ibb.co/6N1PVR2/portfolio3.jpg",
    brand: "A Inventory Manager Website",
    liveSite: "https://doctors-portal-eedf2.firebaseapp.com/",
    client: "",
    server: "",
    exists: [
      "Items of different categories are displayed in the form of grid columns on the home page.",
      "It has a dashboard for admin. Where admin can add different products. Also can control everything.",
      "The website is responsive for mobile, tab, and PC.",
      "Implemented Login and SignUp forms to count users.",
    ],
    technology:
      "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT Token,Express.js",
    description:
      "This is a clinic-related website. Patients can book an appointment slot once a day. The website is responsive for mobile, tab, and PC. An admin can add any user as an admin. An administrator can also add a doctor. Stripe.js have been used to place payments. Implemented JWT (JSON web token) token to secure the website.Implemented Login and SignUp forms to count users.",
  },
];

export default portfolios;
