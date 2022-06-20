import { Device } from "./device.model";

export interface Sensor {
    Name: string;
    Unit: string
    Channel: number;
    IdDevice: string;
    Device: Device;
}