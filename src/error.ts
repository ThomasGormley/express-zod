export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string, stack = "") {
    super(message);
    this.status = status;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string, stack = "") {
    super(404, message, stack);
  }
}
