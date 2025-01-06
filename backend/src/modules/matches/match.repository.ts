import { PrismaClient } from '@prisma/client';
import { MatchDTO, CreateMatchDTO } from './match.model';
import { BaseRepository } from '~/libs/core/base-repository';

export class MatchRepository extends BaseRepository<
  MatchDTO,
  MatchDTO[],
  Partial<CreateMatchDTO>,
  Partial<CreateMatchDTO>
> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'match');
  }

  async createOrUpdate(data: Partial<CreateMatchDTO>): Promise<Partial<CreateMatchDTO>> {
    const existingMatch = await this.prisma.match.findFirst({
      where: {
        OR: [
          { userId1: data.userId1, userId2: data.userId2 },
          { userId1: data.userId2, userId2: data.userId1 },
        ],
      },
    });

    if (existingMatch) {
      return await this.prisma.match.update({
        where: { id: existingMatch.id },
        data,
      });
    } else {
      return await this.prisma.match.create({
        data,
      });
    }
  }

  public async findByUserId(userId: number): Promise<MatchDTO[] | null> {
    return this.prisma.match.findMany({
      where: {
        OR: [{ userId1: userId }, { userId2: userId }],
      },
      include: {
        user1: true,
        user2: true,
      },
    });
  }
}
