import { IsString, MaxLength, IsArray } from "class-validator";

export class CreateRegionDto {
    @IsString()
    @MaxLength(100)
    regionName: string;

    @IsArray()
    regionStates: string[];
}
