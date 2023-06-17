import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'The username of the user' })
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ type: String, description: 'The password of the user' })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'The email of the user' })
  email: string;
}
