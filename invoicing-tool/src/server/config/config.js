const env = process.env.NODE_ENV || "development";
if (env === "development") {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost/InvoiceToolingApp';
} else if (env === "test") {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost/InvoiceToolingAppTest';
}
