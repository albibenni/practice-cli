#!/usr/bin/env node

import { Command } from "commander";

// program declaration

const program = new Command();

// add action to the CLI
program
  .action(() => {
    console.log("Hello, world neww!");
  })
  .description("Say hello to the world");

// execute command
program.parse(process.argv);
