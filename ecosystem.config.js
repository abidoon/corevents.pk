module.exports = {
  apps: [
    {
      name: "corevents",
      script: "node",
      args: ".next/standalone/server.js",
      cwd: "/home/nginx/domains/corevents.pk/public",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
    },
  ],
};
