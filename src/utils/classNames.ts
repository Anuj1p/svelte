type ClassNamesArg = string | false | undefined | null;

/**
 * Simplifies combining class names.
 *
 * @example
 * classNames(
 *   'here are some default class names',
 *   onlyWhenThisIsTruthy && 'yep it is truthy',
 *   maybeUseTernaries ? 'yep' : 'nope
 * );
 * @param classes
 */
export function classNames(...classes: ClassNamesArg[]): string {
  return classes.filter(Boolean).join(" ");
}
