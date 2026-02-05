import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsUrl, Length } from 'class-validator';

export class CreateAuthorDto {
  @Length(1, 255)
  name: string;

  @Length(2, 50)
  country: string;

  @IsOptional()
  @Length(1, 1000)
  description: string | null | undefined;

  @IsUrl({ protocols: ['https'] })
  photo: string | null | undefined;
  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date | null | undefined;
  @Type(() => Date)
  @IsOptional()
  @IsDate()
  dateOfDeath: Date | null | undefined;
}
