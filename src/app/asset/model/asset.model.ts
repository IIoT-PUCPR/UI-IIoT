export interface Asset {
    Id: string;
    Name: string;
    IdSector: string;
    Sector: Sector;
}

export interface Sector {
    Id: string;
    Name: string;
    IdLocal: string;
    Local: Local;
}

export interface Local {
    Id: string;
    Name: string;
}