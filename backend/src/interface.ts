export interface IJwtData {
  id: string;
  data: string;
}

export interface IUSER {
  id: number;
  authId: string;
  nickname: string;
  schoolId: number;
  lastLogin: number;
}
