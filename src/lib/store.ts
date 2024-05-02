import { writable } from "svelte/store";
import type ITodo from "./ITodo";

export const todoListStore = writable<ITodo[]>([])