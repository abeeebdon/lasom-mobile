export interface SignInDetails {
  email: string
  password: string
}

export interface SignupDetails {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}
export interface Product {
  id: string | number
  name: string
  category: string
  price: string
  quantity: string
  profileImageUrl: string
}
