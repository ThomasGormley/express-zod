import { Request, RequestHandler, Response } from "express";
import { z, ZodType, ZodTypeDef } from "zod";
import { ParamsDictionary } from "express-serve-static-core";
import { ZodError, ZodSchema } from "zod";

// Great library, 200 LOC but no updates in over a year
// https://github.com/Aquila169/zod-express-middleware/blob/main/src/index.ts
export declare type RequestValidation<TParams, TQuery, TBody> = {
  params?: ZodSchema<TParams>;
  query?: ZodSchema<TQuery>;
  body?: ZodSchema<TBody>;
};

export type TypedRequestBody<TBody extends ZodType<any, ZodTypeDef, any>> =
  Request<ParamsDictionary, any, z.infer<TBody>, any>;
export type TypedRequestParams<TParams extends ZodType<any, ZodTypeDef, any>> =
  Request<z.infer<TParams>, any, any, any>;
export type TypedRequestQuery<TQuery extends ZodType<any, ZodTypeDef, any>> =
  Request<ParamsDictionary, any, any, z.infer<TQuery>>;

type ErrorListItem = {
  type: "Query" | "Params" | "Body";
  errors: ZodError<unknown>;
};

export const sendErrors: (
  errors: Array<ErrorListItem>,
  res: Response
) => void = (errors, res) => {
  return res
    .status(422)
    .send(errors.map((error) => ({ type: error.type, errors: error.errors })));
};

export const validateRequest: <TParams = any, TQuery = any, TBody = any>(
  schemas: RequestValidation<TParams, TQuery, TBody>
) => RequestHandler<TParams, any, TBody, TQuery> =
  ({ params, query, body }) =>
  (req, res, next) => {
    const errors: Array<ErrorListItem> = [];
    if (params) {
      const parsed = params.safeParse(req.params);
      if (!parsed.success) {
        errors.push({ type: "Params", errors: parsed.error });
      }
    }
    if (query) {
      const parsed = query.safeParse(req.query);
      if (!parsed.success) {
        errors.push({ type: "Query", errors: parsed.error });
      }
    }
    if (body) {
      const parsed = body.safeParse(req.body);
      if (!parsed.success) {
        errors.push({ type: "Body", errors: parsed.error });
      }
    }
    if (errors.length > 0) {
      return sendErrors(errors, res);
    }
    return next();
  };
