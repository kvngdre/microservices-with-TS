import IUserRequest from '../dto/userRequest.dto'

type UserProjection = Partial<Record<keyof IUserRequest, boolean>>

export default UserProjection
