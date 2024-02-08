import * as AdminCommands from "./admin";
import * as UserCommands from "./user";
import { forEach } from "lodash";

export const commandLoader = (commandsOnly?: boolean) => {
  const commandsList: Array<any> = [];

  const getCollection = (collection: any) => {
    let commandList: any = [];

    forEach(collection, (e) => {
      if (commandsOnly) commandList.push({ ...e.default.builder });
      else commandList.push({ ...e.default });
    });

    return commandList;
  };

  // commands collections
  commandsList.push(...getCollection(AdminCommands));
  commandsList.push(...getCollection(UserCommands));
  // ====================

  // commands logger
  const commandsLogger = () => {
    const availableCommandsLogger: Array<any> = [];

    forEach(commandsList, (e) => {
      availableCommandsLogger.push(e.name);
    }).join("|");

    console.log(`commands: [${availableCommandsLogger.join("|")}]`);
  };

  commandsLogger();

  return commandsList;
};
