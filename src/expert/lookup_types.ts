type submitRequest = {
  transactionId: string;
  personal: {
    title: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    previousAlias: {
      firstname: string;
      lastname: string;
    };
    gender: string;
  };
  payment: {
    creditToken: string;
  };
};

type PaymentRequest = submitRequest["payment"];
type PerviousAliasRequest = submitRequest["personal"]["previousAlias"];

export function getPayment(): PaymentRequest {
  return {
    creditToken: "1234567890uwewjewejwje",
  };
}

// export function getPayment(): submitRequest["payment"] {
//   return {
//     creditToken: "1234567890uwewjewejwje",
//   };
// }
