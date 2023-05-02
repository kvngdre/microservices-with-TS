export default interface ApiErrorArgs {
  message: string;
  description?: string;
  isOperational?: boolean;
  data?: any;
}