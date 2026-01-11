export function successRes(status, message, data) {
  return {
    code: status || 200,
    message,
    ...data,
  };
}

export function errorRes(status, message) {
  return {
    code: status || 400,
    message,
  };
}
