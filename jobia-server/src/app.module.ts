import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  controllers: [AppController],
  imports: [CandidateModule],
  // imports: [
  //   CandidateModule,
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: '127.0.0.1',
  //     port: 3306,
  //     username: 'root',
  //     password: 'ariba05',
  //     database: 'jobia',
  //     entities: [candidate],
  //     synchronize: true,
  //     autoLoadEntities: true, 
  //   }),
  // ],
})
export class AppModule {}
