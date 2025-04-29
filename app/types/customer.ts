export type Gender = "Male" | "Female" | "Other";
export type ContactPreference = "Email" | "Phone" | "SMS";
export type Hobby = "Reading" | "Sports" | "Gaming" | "Traveling";

export interface Customer {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  gender: Gender;
  contactPreference: ContactPreference;
  hobbies: Hobby[];
  bio?: string;
  dateOfBirth: string;
  profilePicture?: string;
  newsletterSubscription: boolean;
}

export interface CustomerFormData extends Omit<Customer, "_id"> {}
