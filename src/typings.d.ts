/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare interface IGeolocation {
  lat: number;
  lng: number;
}

declare interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeolocation;
}

declare interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare interface IBasicUserInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
}

declare interface IUser extends IBasicUserInfo {
  id: string;
  address: IUserAddress;
  company: IUserCompany;
}
