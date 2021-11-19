import express from "express";
import morgan from "morgan";
import globalRouter from './routers/globalRouters';
import videoRouter from './routers/videoRouters';
import userRouter from './routers/userRouters';

const PORT = 4000;

const app = express(); 
const logger = morgan("dev");
app.use(logger);

app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);