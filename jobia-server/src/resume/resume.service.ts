import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resumeEducation } from 'src/resume-education/entity/resume-education.entity';
import { resumeExperience } from 'src/resume-experience/entity/resume-experience.entity';
import { resumeProjects } from 'src/resume-projects/entity/resume-projects.entity';
import { Repository } from 'typeorm';
import { resumeCreateDto } from './dto/resume-create.dto';
import { resumeUpdateDto } from './dto/resume-update.dto';
import { resumeCompleteCreateDto } from './dto/resume-wholeCreate.dto';
import { resume } from './entity/resume.entity';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(resume)
        private resumeRepository: Repository<resume>,
        @InjectRepository(resumeEducation)
        private resumeEducationRepository: Repository<resumeEducation>,
        @InjectRepository(resumeExperience)
        private resumeExperienceRepository: Repository<resumeExperience>,
        @InjectRepository(resumeProjects)
        private resumeProjectsRepository: Repository<resumeProjects>


    ) { }

    
    createWholeResume(resCreateDto: resumeCompleteCreateDto) {
        // console.log(resCompleteCreateDto);
        const answer = Object.values(JSON.parse(JSON.stringify(resCreateDto)));
        console.log("Ariba");
        // console.log(answer[0]);
        console.log("Ariba");
        console.log(answer[0]['eduFK']);
        console.log("Ariba");
        // console.log(answer[0]['projFK']);
        console.log("Ariba");
        // console.log(answer[0]['expFK']);
        console.log("Ariba");

        const r = this.resumeRepository.save(answer);
        return null;
    }


    async showResumeExperienceByResumeId(resFK: number): Promise<resume[]> {
        return await this.resumeRepository.find({
            relations: ['expFK'], 
            where: {resId: resFK}
        });
    }  
    async showResumeEducationByResumeId(resFK: number): Promise<resume[]> {
        return await this.resumeRepository.find({
            relations: ['eduFK'], 
            where: {resId: resFK}
        });
    }  
    async showResumeProjectByResumeId(resFK: number): Promise<resume[]> {
        return await this.resumeRepository.find({
            relations: ['projFK'], 
            where: {resId: resFK}
        });
    }  

    async showCompleteResume(resFK: number): Promise<resume[]> {
        return await this.resumeRepository.find({
            relations: ['projFK', 'eduFK', 'expFK'], 
            where: {resId: resFK}
        });
    }



    getR(): Promise<resume[]> {
        return this.resumeRepository.find();
    }

    createR(resCreateDto: resumeCreateDto) {
        return this.resumeRepository.save(resCreateDto);
    }

    updateR(resUpdateDto: resumeUpdateDto, resumeId: number ){
        return this.resumeRepository.update(resumeId, resUpdateDto);
    }


    showRById(resId: number) {
        return this.resumeRepository.findOne({where :{resId}});
    }

    deleteR( resId: number ) {
        return this.resumeRepository.delete(resId);
    }
}


// [
//     {
//         "resId": 6,
//         "careerObjective": "My career Objective 2",
//         "position": "My Position 2",
//         "skills": "My skills 2",
//         "linkedIn": "My linkedin link 2",
//         "gitHub": "My github Link 2",
//         "hobbiesInterest": "My hibbies and interest 2",
//         "candFK": 12
//         "projFK": [
//             {
//                 "projId": 29,
//                 "projTitle": "My Project title",
//                 "projDescription": "My project description"
//             }
//         ],
//         "eduFK": [
//             {
//                 "eduId": 19,
//                 "eduEndYear": 2001,
//                 "eduInstituteName": "My education institute",
//                 "eduDegree": "Bachelors"
//             }
//         ],
//         "expFK": [
//             {
//                 "expId": 1,
//                 "expYear": 2003,
//                 "expCompanyName": "Company Name",
//                 "expDescription": "My desription"
//             },
//             {
//                 "expId": 2,
//                 "expYear": 2004,
//                 "expCompanyName": "Company Name2",
//                 "expDescription": "My desription2"
//             }
//         ]
//     }
// ]