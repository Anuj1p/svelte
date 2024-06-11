

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CDcyYXTg.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D6A44wRX.js"];
export const stylesheets = [];
export const fonts = [];
