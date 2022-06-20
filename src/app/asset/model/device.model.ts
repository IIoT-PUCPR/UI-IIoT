import { Asset } from "./asset.model";
import { Sensor } from "./sensor.model";

export interface Device {
    Name: string;
    MAC: string;
    IdAsset: string;
    Asset: Asset;
    Sensors: Sensor[];
}