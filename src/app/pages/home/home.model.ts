export class HeroOfferModel {
  constructor(
    public id: string,
    public heading: string,
    public subHeading: string,
    public description: string,
    public image: string
  ) {}
}
export class OfferModel {
  constructor(
    public id: string,
    public name: string,
    public important: boolean,
    public image: string
  ) {}
}
