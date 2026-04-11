import 'dotenv/config';
import { createApp, log } from "./app.js";
import { serveStatic } from "./static.js";

process.on('uncaughtException', (err) => {
  console.error('[FATAL] uncaughtException:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[FATAL] unhandledRejection:', reason);
});

(async () => {
  try {
  const { app, httpServer } = await createApp();

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite.js");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "8113", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
  } catch (err) {
    console.error('[FATAL] Startup error:', err);
    process.exit(1);
  }
})();
