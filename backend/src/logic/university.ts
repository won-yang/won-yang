import { IUniversity } from '../interface';
import * as university_db from '../db/university';

export const getUniversityList = async (name: string): Promise<IUniversity[]> => {
  const university = await university_db.getUniversityListByName(name);
  return university;
};
