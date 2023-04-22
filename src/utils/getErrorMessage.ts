export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function getErrorName(error: unknown) {
  if (error instanceof Error) return error.name;
  return String(error);
}
