type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [key: string]: JsonValue };

type Obj = Record<string, JsonValue> | JsonValue[];

function isEmpty(obj: Obj): boolean {
  return Object.entries(obj).length === 0;
}
