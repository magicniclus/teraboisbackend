module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6690fb98cf7eafed3867a2f5fb5862ba'),
  },
});
