import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($createUserUser: CreateUserInput!) {
    createUser(data: $createUserUser) {
      user {
        _id
        name
        password
        taxId
      }
      account {
        _id
        numberAccount
        balance
      }
      token
    }
  }
`;

const LOGIN = gql`
  mutation Login($login: Login!) {
    login(login: $login) {
      token
      user {
        name
        taxId
      }
    }
  }
`;

const TRANSACTION = gql`
  mutation CreateTransaction($transaction: AddTransactionInput!) {
    addTransaction(transaction: $transaction) {
      _id
      sender {
        name
        taxId
      }
      receiver {
        name
        taxId
      }
      value
    }
  }
`;
export { CREATE_USER, LOGIN, TRANSACTION };
