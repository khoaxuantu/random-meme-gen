/**
 * A welcome log. It will display whenever the project is compiled successfully
 */
export function hiConsole(port: string | number) {
  console.log("\x1b[92mCompiled successfully!\x1b[0m");
  console.log(`

Now you can view the project in your browser:

  Local       :   \x1b[96mhttp://localhost:${port}\x1b[0m
  IP Address  :   \x1b[96mhttp://127.0.0.1:${port}\x1b[0m

🚀🚀🚀 Have fun ~

  `);
}

export function responseLog(res: Response, reqPath: string): Response {
  const status = (res.status >= 400) ? `\x1B[31m${res.status}\x1B[0m` : `${res.status}`;
  console.log(`[Response | ${status}]`);
  return res;
}
