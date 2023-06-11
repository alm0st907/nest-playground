import {  Controller, Get, Post } from "@nestjs/common";
import {  ApiTags } from "@nestjs/swagger";

@Controller('test-endpoint')
@ApiTags('test-endpoint')
export class TestEndpointController {
  @Get()
  getTestEndpoint(): string {
    return (
      'This is the test endpoint + the datetime: ' + new Date().toLocaleString()
    );
  }
}
