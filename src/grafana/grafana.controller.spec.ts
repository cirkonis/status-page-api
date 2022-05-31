import { Test, TestingModule } from '@nestjs/testing';
import { GrafanaController } from './grafana.controller';

describe('GrafanaController', () => {
  let controller: GrafanaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrafanaController],
    }).compile();

    controller = module.get<GrafanaController>(GrafanaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
