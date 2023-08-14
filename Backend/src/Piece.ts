export class Piece {
  constructor(
    public color: string,
    public symbol: string,
    public name: string,
    public position?: [number, number]
  ) {}
}
