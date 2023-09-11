export function divideButtons<T>(array: T[]): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }

  return result;
}
