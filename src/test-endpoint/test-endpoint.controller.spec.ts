import { Test, TestingModule } from '@nestjs/testing';
import { TestEndpointController } from './test-endpoint.controller';

describe('TestEndpointController', () => {
  let controller: TestEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestEndpointController],
    }).compile();

    controller = module.get<TestEndpointController>(TestEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
