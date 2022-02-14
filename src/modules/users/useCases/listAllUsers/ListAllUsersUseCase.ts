import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    const users = this.usersRepository.list();

    if(!user){
      throw new Error("user not found!")
    }
    
    if(user.admin){
      return users
    } else {
      throw new Error("user is not an administrator!")
    }
  }
}

export { ListAllUsersUseCase };
