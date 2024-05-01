import { onMount } from "svelte";
export const initiatedOnmount = (delay, cb) => {
    
    onMount(() => {
        setTimeout(() => {
            cb();
        }, delay);
    });
}