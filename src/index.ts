#!/usr/bin/env node

import { Command } from "commander";

// program declaration

const program = new Command();

// add action to the CLI
program
  .argument("<string>", "string to print")
  .option("-c, --capitalize", "capitalizes the message")
  .action((message: string, opts: { capitalize?: boolean }) => {
    if (opts.capitalize) {
      console.log(`Hello, world with ${message.toUpperCase()}!`);
    } else console.log(`Hello, world with ${message}!`);
  })
  .description("Say hello to the world");
program
  .command("add <numers...>")
  .action((numers: number[]) => {
    const total = numers.reduce((a, b) => a + b, 0);
    console.log("🚀 ~ file: index.ts:20 ~ total:", total);
  })
  .description("Add numbers and print the total");
program
  .command("get-max-number <numers...>")
  .action((numers: number[]) => {
    const max = Math.max(...numers);
    console.log("🚀 ~ file: index.ts:27 ~ .action ~ max:", max);
  })
  .description("Add numbers and print the total");

// execute command with given arguments
program.parse(process.argv);
