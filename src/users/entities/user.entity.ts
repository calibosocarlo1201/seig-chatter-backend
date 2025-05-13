import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from '../../common/database/abstract.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema({ versionKey: false })
@ObjectType()
export class Users extends AbstractEntity {
  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}

export const UserEntity = SchemaFactory.createForClass(Users);