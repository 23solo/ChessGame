export class Piece {
  constructor(
    public color: 'W' | 'B',
    public symbol: string,
    public name: string,
    public position: [number, number]
  ) {}
}
