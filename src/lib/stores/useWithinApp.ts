import { writable } from "svelte/store";

// export const withinApp = () => {
//     const isBrowser = typeof window !== 'undefined';
//   const { subscribe, set } = writable<boolean>(false);

//   // Check if we are within an app (webview)
//   const checkWithinApp = () => {
//     const isWithinApp = !!(
//       window?.Android?.track ||
//       window?.webkit?.messageHandlers?.track?.postMessage
//     );
//     set(isWithinApp);
//   };

//   // Initialize the store
//   if (isBrowser) {
//     checkWithinApp();
//   }

//   return {
//     subscribe,
//   };
// };

// Create a writable store for withinApp
export const withinApp = writable(false);

// Export a function to update the withinApp store
export function setWithinApp(value: boolean) {
  withinApp.set(value);
}
