import { renderToReadableStream } from "react-dom/server";
import RootLayout from "@/layout";
import { hiConsole } from "@configs/CustomLog";

const PORT = process.env.PORT || 3000;
const header = {
  headers: {
    "Content-Type": "text/html",
  }
};

Bun.serve({
  async fetch(req) {
    let reqPath = new URL(req.url).pathname;
    console.log(`[Request | ${req.method}] - ${reqPath}`);

    let stream;
    let res: Response;
    try {
      stream = await renderToReadableStream(<RootLayout />);
      res = new Response(stream, header);
    } catch (err) {
      console.log(err);
      res = new Response("<h1>500</h1>", {
        status: 500,
        headers: {
          "Content-Type": "text/html",
        }
      });
    }
    return res;
  },
  port: PORT
})

hiConsole(PORT);
