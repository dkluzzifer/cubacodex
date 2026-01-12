export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ErrorHandler {
  static handle(error: unknown): AppError {
    if (error instanceof AppError) {
      return error;
    }
    
    if (error instanceof Error) {
      return new AppError(error.message, 'UNKNOWN_ERROR');
    }
    
    return new AppError('Error desconocido', 'UNKNOWN_ERROR', error);
  }
  
  static log(error: AppError): void {
    console.error(`[${error.code}] ${error.message}`, error.details);
  }
  
  static getUserMessage(error: AppError): string {
    const messages: Record<string, string> = {
      'AI_PROVIDER_ERROR': 'No se pudo conectar con el servicio de IA. Verifica tu configuración.',
      'FILE_NOT_FOUND': 'El archivo no fue encontrado.',
      'FILE_READ_ERROR': 'Error al leer el archivo. Verifica los permisos.',
      'NETWORK_ERROR': 'Error de conexión. Verifica tu internet.',
      'UNKNOWN_ERROR': 'Ocurrió un error inesperado.',
    };
    
    return messages[error.code] || error.message;
  }
}
