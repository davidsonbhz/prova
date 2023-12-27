export interface ApiResponse<T> {
    data?: T;
    requestTime: number;
    success: boolean;
    message: string;
}

export const emptyResponse: ApiResponse<any> = {data: null, requestTime: 0, success: true, message: '' }