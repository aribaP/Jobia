import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { scoreCreateDto } from 'src/score/dto/score-create.dto';
import { jobDescription } from 'src/job-description/entity/job-description.entity';
import { score } from 'src/score/entity/score.entity';
import { Repository } from 'typeorm';
import { resumeCreateDto } from './dto/resume-create.dto';
import { resumeUpdateDto } from './dto/resume-update.dto';
import { resume } from './entity/resume.entity';

@Injectable()
export class ResumeService {
    constructor(
        @InjectRepository(resume)
        private resumeRepository: Repository<resume>,
        @InjectRepository(jobDescription)
        private jobDescriptionRepository: Repository<jobDescription>,
        @InjectRepository(score)
        private scoreRepository: Repository<score>,
    ) { }

    wordCountMap(str) {
        console.log(typeof str); 

        const words = str.toString().split(' ');
        console.log(words); //  ['Fri', 'Dec', ...]


        let wordCount = {};
        words.forEach((w) => {
            wordCount[w] = (wordCount[w] || 0) + 1;

        });
        return wordCount;
    }

    addWordsToDictionary(wordCountmap, dict) {
        for (let key in wordCountmap) {
            dict[key] = true;
        }
    }
    wordMapToVector(map, dict) {
        let wordCountVector = [];
        for (let term in dict) {
            wordCountVector.push(map[term] || 0);
        }
        return wordCountVector;
    }

    dotProduct(vecA, vecB) {
        let product = 0;
        for (let i = 0; i < vecA.length; i++) {
            product += vecA[i] * vecB[i];
        }
        return product;
    }

    magnitude(vec) {
        let sum = 0;
        for (let i = 0; i < vec.length; i++) {
            sum += vec[i] * vec[i];
        }
        return Math.sqrt(sum);
    }

    cosineSimilarity(vecA, vecB) {
        return this.dotProduct(vecA, vecB) / (this.magnitude(vecA) * this.magnitude(vecB));
    }

    textCosineSimilarity(txtA, txtB) {
        const wordCountA = this.wordCountMap(txtA);
        const wordCountB = this.wordCountMap(txtB);
        let dict = {};
        this.addWordsToDictionary(wordCountA, dict);
        this.addWordsToDictionary(wordCountB, dict);
        const vectorA = this.wordMapToVector(wordCountA, dict);
        const vectorB = this.wordMapToVector(wordCountB, dict);
        return this.cosineSimilarity(vectorA, vectorB);

    }

    async createWholeResume(resCreateDto: resumeCreateDto) {
        console.log( resCreateDto);
        const saved = await this.resumeRepository.save(resCreateDto);
        // const getAllJD = await this.jobDescriptionRepository.find({});


        // for (let index = 0; index < getAllJD.length; index++) {
        //     const element = getAllJD[index];
        //     console.log(resCreateDto.position, element.jdPosition);

        //     const acc1 = this.textCosineSimilarity(resCreateDto.position, element.jdPosition);
        //     const acc2 = this.textCosineSimilarity(resCreateDto.careerObjective + resCreateDto.skills,  element.jdRequiredSkills);

        //     var accuracy = ((acc1 * 0.6) + (acc2 * 0.4)) * 100;
        //     console.log(accuracy);
        //     const scoreDto: scoreCreateDto = {
        //         score: accuracy,
        //         jdId:  element.jdId,
        //         resId: resCreateDto.resId
        //     };
        //     if (accuracy >= 50) {
        //         const whatever = this.scoreRepository.save(scoreDto);
        //     }

        // }
        // return await this.resumeRepository.find();

    }

    async showWholeResume(resFK: number): Promise<resume[]> {
        return await this.resumeRepository.find({
            relations: ['projFK', 'eduFK', 'expFK'], 
            where: {resId: resFK}
        });
    }

    updateWholeResume(resUpdateDto: resumeUpdateDto, resId: number ){
        const answer = Object.values(JSON.parse(JSON.stringify(resUpdateDto)));
        return this.resumeRepository.update(resId, resUpdateDto);
    }

    deleteWholeResume( resId: number ) {
        return this.resumeRepository.delete(resId);
    }

   




    // async showResumeExperienceByResumeId(resFK: number): Promise<resume[]> {
    //     return await this.resumeRepository.find({
    //         relations: ['expFK'], 
    //         where: {resId: resFK}
    //     });
    // }  

    // async showResumeEducationByResumeId(resFK: number): Promise<resume[]> {
    //     return await this.resumeRepository.find({
    //         relations: ['eduFK'], 
    //         where: {resId: resFK}
    //     });
    // }  

    // async showResumeProjectByResumeId(resFK: number): Promise<resume[]> {
    //     return await this.resumeRepository.find({
    //         relations: ['projFK'], 
    //         where: {resId: resFK}
    //     });
    // }  

    // getR(): Promise<resume[]> {
    //     return this.resumeRepository.find();
    // }

    // createR(resCreateDto: resumeCreateDto) {
    //     return this.resumeRepository.save(resCreateDto);
    // }

    // showRById(resId: number) {
    //     return this.resumeRepository.findOne({where :{resId}});
    // }

    
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