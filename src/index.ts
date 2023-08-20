#!/usr/bin/env node

import { Command } from "commander";

// program declaration

const program = new Command();

// add action to the CLI
program
  .argument("<string>", "string to print")
  .action((message: string) => {
    console.log(`Hello, world with ${message}!`);
  })
  .description("Say hello to the world");

// execute command with given arguments
program.parse(process.argv);
