import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";
import { Users } from "src/users/entities/user.entity";

const getCurrentUserByContext = (context: ExecutionContext): Users =>{
    if(context.getType() === 'http'){
        return context.switchToHttp().getRequest().user;
    }else if (context.getType<GqlContextType>() === 'graphql'){
        return GqlExecutionContext.create(context).getContext().req.user;
    }

    return context.switchToHttp().getRequest().user
}

export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => getCurrentUserByContext(context)
)