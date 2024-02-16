import { JSONObject } from 'data/types';

export interface AnimatedIconProps {
  icon: JSONObject;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum TrashIconState {
  Hover = 'hover-trash-empty',
  In = 'in-trash-empty',
}
