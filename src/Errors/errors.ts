export class NicknameDuplicationError extends Error {
  status: number;

  code: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'NicknameDuplicationError';
    this.status = status ?? 400;
    this.code = code ?? 'NICKNAME_DUPLICATION';
  }
}

export class NicknameDoesntExistError extends Error {
  status: number;

  code: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'NicknameDoesntExistError';
    this.status = status ?? 400;
    this.code = code ?? 'NICKNAME_DOESNTEXIST';
  }
}
