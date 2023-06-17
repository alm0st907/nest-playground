import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ type: String, description: 'The username of the customer' })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, description: 'The email of the customer' })
  email: string;
}
