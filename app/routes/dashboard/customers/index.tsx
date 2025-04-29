"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { DialogContent } from "~/components/ui/dialog";
import { Dialog } from "~/components/ui/dialog";
import type { Customer } from "~/types/customer";
import { gql, useMutation, useQuery } from "@apollo/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Customers" },
    { name: "description", content: "Customers" },
  ];
}

const GET_ALL_CUSTOMERS = gql`
  query GetCustomer {
    customers {
      _id
      name
      email
      age
      gender
    }
  }
`;

const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($id: ID!) {
    deleteCustomer(id: $id) {
      _id
    }
  }
`;

const CustomersList = () => {
  const [selectedId, setSelectedId] = useState("");
  const {
    data: customersData,
    loading,
    error,
    refetch: fetchCustomers,
  } = useQuery(GET_ALL_CUSTOMERS, {
    fetchPolicy: "no-cache",
  });

  const customers: Customer[] = customersData?.customers || [];

  const [deleteCustomer] = useMutation(DELETE_CUSTOMER, {
    onCompleted: () => {
      fetchCustomers();
      setSelectedId("");
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = async () => {
    await deleteCustomer({ variables: { id: selectedId } });
  };

  const handleCancel = () => {
    setSelectedId("");
  };

  const actionsColumn = {
    id: "actions",
    cell: ({ row }: { row: any }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link to={`/admin/customers/${customer._id}`}>
              <DropdownMenuItem className="cursor-pointer">
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => setSelectedId(customer._id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Link to="/admin/customers/create">
          <Button>Add New Customer</Button>
        </Link>
      </div>

      <Dialog open={selectedId !== ""}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will delete the customer
              permanently.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DataTable columns={[...columns, actionsColumn]} data={customers || []} />
    </div>
  );
};

export default CustomersList;
