import IApiResponse from '../types/api-response.interface';

class ApiResponse<T> implements IApiResponse<T> {
  constructor(
    public status: boolean,
    public data: T = null,
    public message: string = 'Successfully Response',
  ) {}
}
export default ApiResponse;
