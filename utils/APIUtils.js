import { ChatUtils } from "./ChatUtils";
import request from "requestV2"

let meowVersion = "Unknown";

if (FileLib.exists("/MeowClient", "metadata.json")) {
    let m = FileLib.read("/MeowClient", "metadata.json");
    m = JSON.parse(m);
    if (m) {
        meowVersion = m.version;
    }
}

console.log(`MeowClient: ${meowVersion}`);

let whiteListed = [];

function updateDictators() {
}


export class APIUtils {

    static meowVersion = meowVersion;

    static UUID = Java.type("java.util.UUID");

    static reportError(err) {
    
    }

    static dictator = register("Chat", (name, path, event) => {
    }).setCriteria(/^Party > (.+) ?[ቾ⚒]?: !run (.+)$/)//.unregister();

    static fetchProfit() {
    }

    static auth() {
    }
}
