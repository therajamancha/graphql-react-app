"use client";

import { CustomerForm } from "~/components/forms/customer-form";
import { useNavigate } from "react-router";
import type { Route } from "./+types/customer";
import type { Customer, CustomerFormData } from "~/types/customer";
import { Form } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerSchema } from "~/lib/validations/customer";
import { gql, useMutation, useQuery } from "@apollo/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Customer Details" },
    { name: "description", content: "Customer Details" },
  ];
}

const GET_CUSTOMER = gql`
  query getCustomer($id: ID!) {
    customer(id: $id) {
      _id
      name
      email
      age
      gender
      bio
      contactPreference
      dateOfBirth
      hobbies
      newsletterSubscription
      password
      profilePicture
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation updateCustomer(
    $id: ID!
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
    updateCustomer(
      _id: $id
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

const CustomerDetails = ({ params }: Route.ComponentProps) => {
  const { customerId } = params;
  const {
    data: customerData,
    error,
    loading,
  } = useQuery<{
    customer: Customer;
  }>(GET_CUSTOMER, {
    variables: { id: customerId },
  });

  const customer: Customer | undefined = customerData?.customer;

  if (!customer) {
    return <div>Customer not found</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <CustomerEdit customer={customer} />;
};

const CustomerEdit = ({ customer }: { customer: Customer }) => {
  const navigate = useNavigate();
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER, {
    onCompleted: () => {
      navigate("/admin/customers");
    },
  });

  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: customer,
  });

  const handleSubmit = async (data: CustomerFormData) => {
    await updateCustomer({
      variables: {
        id: customer._id,
        ...data,
      },
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CustomerForm form={form} title="Edit Customer" />
        </form>
      </Form>
    </div>
  );
};

export default CustomerDetails;
