
export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

export type CardType = {
    width: string;
    variant: CardVariant
}

type AddressType = {
    street: string;
    city: string;
    zipcode: string
}

export type UserType = {
    id: number;
    name: string;
    email: string;
    address: AddressType
}

export type UserListType = {
 users: Array<UserType>
}