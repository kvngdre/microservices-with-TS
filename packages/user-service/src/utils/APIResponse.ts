class APIResponse {
  public readonly success: boolean
  
  constructor(public readonly message: string, public readonly data?: any) {
    this.success = true
  }

}

export default APIResponse
