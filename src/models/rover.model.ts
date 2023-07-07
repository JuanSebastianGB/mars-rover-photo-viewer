export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Camera2[];
}

export interface Camera2 {
  name: string;
  full_name: string;
}

export enum RoverOptions {
  curiosity = 'curiosity',
  opportunity = 'opportunity',
  spirit = 'spirit',
}

export type RoverNameType = keyof typeof RoverOptions;
