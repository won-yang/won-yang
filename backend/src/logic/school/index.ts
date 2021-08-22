import { ISchool } from '../../interface/interface';
import * as school_db from '../../db/school';

export const getSchoolList = async (name: string): Promise<ISchool[]> => {
  const school = await school_db.getSchoolByName(name);
  return school;
};
