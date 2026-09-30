import { defineMigrations } from "@chardb/core/server";
import { initialSchema } from "./migrations/v1.ts";
import { betterAuth17 } from "./migrations/v2.ts";

export const migrations = defineMigrations([initialSchema, betterAuth17]);
