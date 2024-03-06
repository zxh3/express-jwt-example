import express from "express";

const router = express.Router();

const INTERVAL = 50;

router.post("/chat-completion", async (req, res) => {
  const { message } = req.body;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendEvent = (token: string) => {
    res.write(`data: ${JSON.stringify({ token })}\n\n`);
  };

  let i = 0;

  const intervalId = setInterval(() => {
    if (i >= message.length) {
      clearInterval(intervalId);
      return res.end();
    } else {
      sendEvent(message[i++]);
    }
  }, INTERVAL);

  // Handle client disconnection or abort
  const cleanupResources = (msg: string) => () => {
    clearInterval(intervalId);
    // Clean up any other resources here
    console.log(msg);
  };

  res.on("close", cleanupResources("close"));
  res.on("abort", cleanupResources("abort"));

  // Clean up resources when the response is finished or closed
  res.on("finish", cleanupResources("finish"));
  res.on("close", cleanupResources("close"));
});

export default router;
