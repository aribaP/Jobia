import { EntitySchema } from 'typeorm';
import { candidate } from './-candidate.entity';

export const candidateSchema = new EntitySchema<candidate>({
  name: 'candidate',
  target: candidate,
  columns: {
    candId: {
      type: Number,
      primary: true,
      generated: true,
    },
    candName: {
      type: String,
    },
    candEmail: {
      type: String,
    },
    candPassword: {
        type: String,
    },
    candAddress: {
        type: String,
    },
    candCity: {
        type: String,
    },
    candCNIC: {
        type: String
    },
    candContactNumber: {
        type: String
    }
  },
  
});