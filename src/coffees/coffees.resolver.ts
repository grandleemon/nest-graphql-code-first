import { Resolver, Query, Args, ID, Mutation } from "@nestjs/graphql";
import { Coffee } from "./entities/coffee.entity/coffee.entity";
import { ParseIntPipe } from "@nestjs/common";
import { CreateCoffeeInput } from "./dto/create-coffee.input/create-coffee.input";

@Resolver(() => Coffee)
export class CoffeesResolver {
  @Query(() => [Coffee], { name: "coffees" })
  async findAll() {
    return [];
  }

  @Query(() => Coffee, { name: "coffee", nullable: true })
  async findOne(@Args("id", { type: () => ID }, ParseIntPipe) id: number) {
    return null;
  }

  @Mutation(() => Coffee, { name: "createCoffee", nullable: true })
  async create(
    @Args("createCoffeeInput") createCoffeeInput: CreateCoffeeInput,
  ) {
    return null;
  }
}
