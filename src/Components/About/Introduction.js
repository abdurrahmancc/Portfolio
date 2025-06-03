import React from "react";
import { Table, Tbody, Td, Tr } from "react-super-responsive-table";

const Introduction = () => {
  return (
    <>
      <Table>
        <Tbody className="text-lg leading-8">
          <Tr>
            <Td className="font-semibold">Full Name</Td>
            <Td className="px-5">:</Td>
            <Td>MD Abdur Rahman</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Age</Td>
            <Td className="px-5">:</Td>
            <Td>25 Years</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Nationality</Td>
            <Td className="px-5">:</Td>
            <Td>Bangladeshi</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Languages</Td>
            <Td className="px-5">:</Td>
            <Td>English, Bangla, Hindi.</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Address</Td>
            <Td className="px-5">:</Td>
            <Td>Baliadanga Bazar, Chapai Nawabganj, Rajshahi.</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Email</Td>
            <Td className="px-5">:</Td>
            <Td>programmer.abdurrahman@gmail.com</Td>
          </Tr>
          <Tr>
            <Td className="font-semibold">Phone</Td>
            <Td className="px-5">:</Td>
            <Td>+8801797001687</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default Introduction;
