export type ErrorCode = 'LOGIN_ERROR' | 'TOKEN_ERROR' | 'DUPLICATED_RECORD';

export function getErrorMessage(errorCode: ErrorCode): string {
  const errormap: Record<ErrorCode, string> = {
    LOGIN_ERROR: 'Erro de login, verifique seu usuário ou senha',
    TOKEN_ERROR: 'Erro de token, sessão possivelmente expirada',
    DUPLICATED_RECORD: 'Registro duplicado, não é possível registrar'
  };
  console.log(errorCode);
  
  return errormap[errorCode] || 'Código de erro desconhecido';
}


