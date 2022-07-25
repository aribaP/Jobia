import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CandidateService {

    getC() {
        return "I am in candidate service class"
    }

    createC(req: Request) {
        return req.body;
    }

    updateC(req: Request, param: { candId: string }) {
        return {body: req.body, param};
    }

    showCById(param: { candId: string }) {
        return param;
    }

    deleteC(param: { candId: string }) {
        return param;
    }
}
