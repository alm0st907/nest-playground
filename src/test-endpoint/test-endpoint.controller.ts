import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('test-endpoint')
@ApiTags('test-endpoint')
export class TestEndpointController {
  @Get()
  getTestEndpoint(): string {
    return (
      'This is the test endpoint + the datetime: ' + new Date().toLocaleString()
    );
  }

  @Post(`just-the-body`)
  @ApiBody({ type: String })
  postTestEndpoint(@Body() req: any): string {
    return `this is the ${JSON.stringify(req)}`;
  }

  @Post('the-whole-req')
  @ApiBody({ type: String })
  postTestEndpointBetter(@Req() req: any): string {
    return `this is the better way to get the request: ${JSON.stringify(
      req.body,
    )}`;
  }
}
