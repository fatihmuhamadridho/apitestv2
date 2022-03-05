// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  env: {
    MONGO_URI: "mongodb://superadmin:ghatan21@cluster0-shard-00-00.r9ib0.mongodb.net:27017,cluster0-shard-00-01.r9ib0.mongodb.net:27017,cluster0-shard-00-02.r9ib0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-218gk5-shard-0&authSource=admin&retryWrites=true&w=majority",
    PRODUCTION: "https://apitestv2.vercel.app/",
    LOCAL: "http://localhost:3000/"
  }
}
