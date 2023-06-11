import { Controller, Get } from "@nestjs/common";

@Controller('test-endpoint')
export class TestEndpointController {
  @Get()
  getTestEndpoint(): string {
    return (
      'This is the test endpoint + the datetime: ' + new Date().toLocaleString()
    );
  }
}
