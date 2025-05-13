import { ModuleManager } from "../module/ModuleManager";
import { CommandManager } from "../command/CommandManager";
import { SkyblockUtils } from "../utils/SkyblockUtils";
import { Scheduler } from "../utils/Scheduler";
import { TickShift } from "../utils/TickShift";
import request from "requestV2";
import { APIUtils } from "../utils/APIUtils";

CommandManager.commandTrigger.register();
CommandManager.inputTrigger.register();
ModuleManager.keyBindTrigger.register();
SkyblockUtils.skyblockDetectionTrigger.register();
Scheduler.register();
TickShift.register();

let isLimbo = false;
