
import { writable } from 'svelte/store';

export function toDictionary(text: string): { [key: string]: string } {
    let newDict = {} as { [key: string]: string }
    text?.split("\n").map( (row) => row.split(/\s+/)).forEach(
        ([k,v, ...args]) => {
            if (k == "") return;
            if (v == "") return;
            if (args.length > 0) return;
            newDict[k] = v
        }
    )
    return newDict
}
export function toTokens(text: string): string[] {
    return text.split(/\s?\b/g)
}


let text: string = localStorage.getItem("Kaidic_targetText") ?? "";
let dict: string = localStorage.getItem("Kaidic_dict") ?? "";

export const tokens = writable(toTokens(text) as string[]);
export const dictionary = writable(toDictionary(dict) as { [key: string]: string });