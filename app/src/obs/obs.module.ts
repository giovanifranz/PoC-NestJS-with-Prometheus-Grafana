import { Module } from '@nestjs/common';
import { ObsService } from './obs.service';
import { ObsController } from './obs.controller';

@Module({
  controllers: [ObsController],
  providers: [ObsService]
})
export class ObsModule {}
