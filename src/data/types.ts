export interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

type JSONValue =
  | string
  | number
  | boolean
  | JSONArray
  | Array<JSONValue>
  | null
  | any;
