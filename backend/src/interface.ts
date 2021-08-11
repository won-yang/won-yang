import { Request, Response } from 'express';

// interface PersoneModel extends mongoose.Document {
//   nom: String,
//   prenom: String,
// }
// router.post('/',(req: CustomRequest<PersoneModel>, res: Response) => {
//    // req.body is now PersoneModel
// }

export interface IJwtData {
  id: string;
  data: string;
}

export interface IUser {
  id: number;
  authId: string;
  nickname: string;
  schoolId: number;
  lastLogin: number;
}

export interface ISchool {
  id: number;
  name: string;
}

export interface IUserRequest extends CustomRequest<IUser> {}

interface CustomRequest<T> extends Request {
  body: T;
}

export interface IRequest<T> {
  headers: any;
  sessionID: string;
  body: T;
  session: any;
  params: any;
  query: any;
  ip: string;
  app: any;
}
