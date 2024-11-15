export enum HttpStatus {
  Ok = 200,
  Created = 201,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  UnprocessableEntity = 422,

  InternalServerError = 500,
}

export enum LocalStorageKey {
  AccessToken = 'access_token',
  RefreshToken = 'refresh_token',
}

export enum ColumnFieldsType {
  Shown = 'shown',
  Popular = 'popular',
  Hidden = 'hidden',
}
