const getTimeStamp = (): string => {
    return new Date().toISOString();
};

const info = (namesapce: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namesapce}] ${message} `, object);
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namesapce}] ${message} `);
    }
};

const warn = (namesapce: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesapce}] ${message} `, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namesapce}] ${message} `);
    }
};

const error = (namesapce: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesapce}] ${message} `, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namesapce}] ${message} `);
    }
};

const debug = (namesapce: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesapce}] ${message} `, object);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namesapce}] ${message} `);
    }
};

export default {
    info,
    warn,
    error,
    debug
};
