export interface ApiResponse<T> {
    data?: T;
    requestTime: number;
    success: boolean;
    message: string;
}

export const emptyResponse: ApiResponse<any> = {data: null, requestTime: 0, success: false, message: '' }
export const emptySuccessResponse: ApiResponse<any> = {data: null, requestTime: 0, success: true, message: '' }

export function errorResponse(m: string): ApiResponse<any> {
    return {message: m, requestTime: 0, success: false, data: null};
}
