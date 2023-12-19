/** @type {import('next').NextConfig} */
// const nextConfig = {
//   let destination = "http://localhost:3001/:path*";
//   async headers() {

//     return [
//       {
//         // matching all API routes
//         source: "/api/:path*",
//         destination,
//         // headers: [
//         //   { key: "Access-Control-Allow-Credentials", value: "true" },
//         //   { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
//         //   {
//         //     key: "Access-Control-Allow-Methods",
//         //     value: "GET,DELETE,PATCH,POST,PUT",
//         //   },
//         //   {
//         //     key: "Access-Control-Allow-Headers",
//         //     value:
//         //       "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//         //   },
//         // ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;


module.exports = {
  async rewrites() {
    const nodeEnv = process.env.NODE_ENV;
    let destination = "http://localhost:3001/:path*";


    return [
      // Add your API proxy rules here
      {
        source: "/api/:path*", // The path to match for the proxy
        destination
      },
      
    ];
  },
};