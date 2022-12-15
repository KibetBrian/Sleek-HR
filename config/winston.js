import winston from "winston/lib/winston/config";
import appRootPath from "app-root-path";

const options = {
    file: {
        level: "info",
        filename: `${appRootPath}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
    },
    console: {
        level: "debug",
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    },
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false,
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};

export default logger;