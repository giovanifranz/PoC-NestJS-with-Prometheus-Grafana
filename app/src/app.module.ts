import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObsModule } from './obs/obs.module';

@Module({
  imports: [ObsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
