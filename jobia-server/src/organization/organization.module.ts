import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { organization } from './entity/organization.entity';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports: [OrganizationService],
  imports: [TypeOrmModule.forFeature([organization])],
})
export class OrganizationModule {}
