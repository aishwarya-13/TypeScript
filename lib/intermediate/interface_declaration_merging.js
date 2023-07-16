"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Here interface Request is declared twice. So, the two properties body and json are merged
//into one interface that has both the properties
function handleRequest(req) {
    req.body;
}
