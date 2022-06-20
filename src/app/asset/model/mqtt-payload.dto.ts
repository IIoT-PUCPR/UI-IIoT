export interface MQTTPayloadDto {
    readings: SensorReadDto[];
}

export interface SensorReadDto {
    value: string;
    channel: number;
}