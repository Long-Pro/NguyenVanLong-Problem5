export default class ApiResponse {
  private message?: string
  private code?: number
  private data?: unknown

  constructor(input: { message?: string; code?: number; data?: unknown }) {
    this.message = input.message
    this.code = input.code
    this.data = input.data
  }
}
