import { IModelBase, ModelBase } from '@probeh/ngx-localstorage';

export class RetroGame extends ModelBase<RetroGame> {

  constructor(options?: IModelBase) {
    super(options);
  }
  public static random(): RetroGame[] {
    const games = new Array<RetroGame>();
    for (let index = 0; index < 10; index++) {
      games.push(new RetroGame({ name: `Game edition #${index}`, isdefault: Math.floor(Math.random() * 10) % 2 == 0, isactive: Math.floor(Math.random() * 10) % 2 == 0 }));
    }
    return games;
  }
}