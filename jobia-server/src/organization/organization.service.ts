import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class OrganizationService {

    getOrg(){
        return "I am organization service";
    }

    createOrg(req: Request) {
        return req.body;
    }

    updateOrg(req: Request, param: { orgId: number }) {
        return {body: req.body, param};
    }

    showOrgById(param: { orgId: number }) {
        return param;
    }

    deleteOrg(param: { orgId: number }) {
        return param;
    }

}
