import { createClient } from "redis";
import { promisify } from "util";


class RedisClient {
    constructor() {
        this.client = createClient();
        this.isClientConneted = true;

        this.client.on("error", err => {
            console.error ("Redis client failed to connect", err.message || err.toString());
            this.isClientConneted = false;
        });

        this.client.on("connect", () => {
            console.log("Redis client connected");
            this.isClientConneted = true;
        });   
    }
    
    isAlive() {
            return this.isClientConneted;
    }

    async get(key) {
        return promisify(this.client.GET).bind(this.client)(key);
    }

    async set (key, value, duration) {
        await promisify(this.client.SETEX)
        .bind(this.client)(key, duration, value);
    }

    async del(key) {
        await promisify(this.client.DEL).bind(this.client)(key);
    }
}

export const redisClient = new RedisClient();
export default redisClient;


