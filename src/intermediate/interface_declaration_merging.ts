/**
  Here interface Request is declared twice. So, the two properties 'body' and 'json' are merged
  into one interface that has both the properties
 */

export interface Request {
  body: any;
}

export interface Request {
  json: any;
}

function handleRequest(req: Request) {
  req.body;
  req.json;
}
