"use client";

import { useNavigate } from "react-router";
import { CustomerForm } from "~/components/forms/customer-form";
import { Form } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerSchema } from "~/lib/validations/customer";
import type { CustomerFormData } from "~/types/customer";
import type { Route } from "./+types/create";
import { gql, useMutation } from "@apollo/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create Customer" },
    { name: "description", content: "Create Customer" },
  ];
}

const CREATE_CUSTOMER = gql`
  mutation createCustomer(
    $name: String!
    $email: String!
    $password: String!
    $age: Int!
    $gender: String!
    $contactPreference: String!
    $hobbies: [String!]!
    $dateOfBirth: String!
    $newsletterSubscription: Boolean!
    $bio: String
    $profilePicture: String
  ) {
    createCustomer(
      name: $name
      email: $email
      password: $password
      age: $age
      gender: $gender
      contactPreference: $contactPreference
      hobbies: $hobbies
      dateOfBirth: $dateOfBirth
      newsletterSubscription: $newsletterSubscription
      bio: $bio
      profilePicture: $profilePicture
    ) {
      _id
      name
      email
      age
      gender
    }
  }
`;

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [createCustomer] = useMutation(CREATE_CUSTOMER, {
    onCompleted: () => {
      navigate("/admin/customers");
    },
  });
  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {},
  });

  const handleSubmit = async (data: CustomerFormData) => {
    try {
      await createCustomer({ variables: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CustomerForm form={form} title="Create Customer" />
        </form>
      </Form>
    </div>
  );
};

export default CreateCustomer;
