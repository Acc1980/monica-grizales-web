module.exports = {
  apps: [
    {
      name: "monica-grizales",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/www/monica-grizales",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      error_file: "/var/log/pm2/monica-grizales-error.log",
      out_file: "/var/log/pm2/monica-grizales-out.log",
    },
  ],
};
