import { writable } from "svelte/store";

// export const hasMounted = () => {

//   const { subscribe, set } = writable<boolean>(false);

//   // Set hasMounted to true when component is mounted
//   const onMount = () => {
//     set(true);
//   };

//   // Call onMount when the store is created
//   onMount();

//   return {
//     subscribe,
//   };
// };

export const hasMounted = writable(false);

// Export a function to update the hasMounted store
export function setHasMounted(value: boolean) {
  hasMounted.set(value);
}
