import { Rover } from './rover.model';

export interface PhotoModel {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}
