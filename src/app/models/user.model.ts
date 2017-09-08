export class UserModel {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public website: string,
    public address: IUserAddress,
    public company: IUserCompany
  ) {}
}
