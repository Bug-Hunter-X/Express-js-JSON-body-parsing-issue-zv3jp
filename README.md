# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem arises when the client sending the request omits or uses an incorrect `Content-Type` header.

## The Bug

The provided `bug.js` file shows a simple Express.js server that expects JSON data in the request body. However, if a request is sent without the correct `Content-Type: application/json` header, the `req.body` will be empty, leading to unexpected behavior and potential errors.

## The Solution

The `bugSolution.js` file presents a solution that involves adding middleware to explicitly parse the request body, regardless of the `Content-Type` header.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Send a POST request to `/data` with a JSON payload, but omit or incorrectly set the `Content-Type` header (e.g., using `curl` or Postman).
5. Observe that the server does not receive the JSON data correctly.
6. Repeat steps 2-5 with `node bugSolution.js` to see the corrected behavior.