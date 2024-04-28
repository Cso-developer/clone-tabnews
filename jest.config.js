const dotenv = require("dotenv");
dotenv.config({
    path: ".env.development",
})

const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: ".",
});

const nextConfig = createJestConfig({
    moduleDirectories: ["node_modules","<rootDir>"],
});

module.exports = nextConfig;