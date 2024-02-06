import {ControllerInterface} from "../../../utils/router/controllers.interface";

export interface UsersControllerInterface extends  Omit<ControllerInterface, 'List'>{}
