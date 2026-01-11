
export function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(err.code || 500).json({
    code: err.code || 500,
    message: err.message 
  });
}
