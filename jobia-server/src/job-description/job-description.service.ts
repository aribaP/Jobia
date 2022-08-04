import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { candidate } from 'src/candidate/entity/candidate.entity';
import { resume } from 'src/resume/entity/resume.entity';
import { score } from 'src/score/entity/score.entity';
import { Connection, Repository } from 'typeorm';
import { jobDescriptionCreateDto } from './dto/jobDescription-create.dto';
import { jobDescriptionUpdateDto } from './dto/jobDescription-update.dto';
import { scoreCreateDto } from '../score/dto/score-create.dto';
import { jobDescription } from './entity/job-description.entity';
var natural = require("natural");
var sw = require('remove-stopwords');

@Injectable()
export class JobDescriptionService {
    constructor(
        @InjectRepository(jobDescription)
        private jobDescriptionRepository: Repository<jobDescription>,
        @InjectRepository(resume)
        private resumeRepository: Repository<resume>,
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,
        @InjectRepository(score)
        private scoreRepository: Repository<score>,

    ) { }

    wordCountMap(str) {
        console.log(typeof str); // 👉️ object

        const words = str.toString().split(' ');
        console.log(words); // 👉️ ['Fri', 'Dec', ...]


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

    async createJD(jdCreateDto: jobDescriptionCreateDto, scoreDto: scoreCreateDto): Promise<resume[]> {
        console.log(jdCreateDto);
        const saved = await this.jobDescriptionRepository.save(jdCreateDto);
        const getAllResumes = await this.resumeRepository.find({
            relations: ['eduFK', 'expFK', 'projFK']
        });


        for (let index = 0; index < getAllResumes.length; index++) {
            const element = getAllResumes[index];
            const candId = element.candFK;
            const answer = Object.values(JSON.parse(JSON.stringify(element)));
            console.log(answer[0]['eduFK']);

            const acc1 = this.textCosineSimilarity(element.position, jdCreateDto.jdPosition);
            const acc2 = this.textCosineSimilarity(element.careerObjective + element.skills, jdCreateDto.jdRequiredSkills);

            var accuracy = ((acc1 * 0.6) + (acc2 * 0.4)) * 100;
            console.log(accuracy);
            const scoreDto: scoreCreateDto = {
                score: accuracy,
                jdId: jdCreateDto.jdId,
                resId: element.resId
            };
            if (accuracy >= 50) {
                const whatever = this.scoreRepository.save(scoreDto);
            }

        }

        return await this.resumeRepository.find();
        // console.log(getAllResumes);
    }

    // createScore(scoreDto: scoreCreateDto) {
    //     return this.scoreRepository.save(scoreDto);
    // }

    async updateJD(jdUpdateDto: jobDescriptionUpdateDto, jdId: number) {
        return await this.jobDescriptionRepository.update(jdId, jdUpdateDto);
    }


    async showJDById(jdId: number): Promise<jobDescription> {
        return await this.jobDescriptionRepository.findOne({ where: { jdId } });
    }

    async deleteJD(jdId: number) {
        return await this.jobDescriptionRepository.delete(jdId);
    }

    // async getJD(): Promise<jobDescription[]> {
    //     return await this.jobDescriptionRepository.find();
    // }
}
