const fs = require('fs');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'msksurvey.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'workplacetool'),
      user: env('DATABASE_USERNAME', 'survey@msksurvey'),
      password: env('DATABASE_PASSWORD', 'MySQL@Bones1968!'),
      ssl: {
        ca: fs.readFileSync('./DigiCertGlobalRootG2.crt.pem'),
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
