import { IsString, IsInt, Length, Min, Max } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(3, 20, { message: "Name must be between 3 and 20 characters." })
  name: string;

  @IsInt()
  @Min(1, { message: "Age must be at least 1." })
  @Max(100, { message: "Age must be less than or equal to 100." })
  age: number;
}
