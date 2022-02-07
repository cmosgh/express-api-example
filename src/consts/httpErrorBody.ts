import {
  BAD_REQUEST,
  BODY_REQUIRED,
  FORBIDDEN,
  RESOURCE_NOT_FOUND,
  ROUTE_NOT_FOUND,
} from './httpErrorCodes'

export const badRequestError = {
  type: 'error',
  code: BAD_REQUEST,
  message: 'Bad request',
  status: 400,
}

export const accessError = {
  type: 'error',
  code: FORBIDDEN,
  message: 'Forbidden',
  status: 403,
}

export const bodyRequiredError = {
  type: 'error',
  code: BODY_REQUIRED,
  message: 'Body cannot be empty',
  status: 422,
}

export const routeNotFoundError = {
  type: 'error',
  code: ROUTE_NOT_FOUND,
  message: 'Route not found',
  status: 404,
}

export const resourceNotFoundError = {
  type: 'error',
  code: RESOURCE_NOT_FOUND,
  message: 'Resource not found',
  status: 404,
}
