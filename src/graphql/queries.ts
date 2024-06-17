import { gql } from "@apollo/client";

const FIND_ACCOUNT = gql`
  query FindAccount($userId: ID!) {
    accountById(userId: $userId) {
      _id
      balance
      numberAccount
      userId {
        name
        taxId
      }
    }
  }
`;

const FIND_USER = gql`
  query FindUser($taxId: String!) {
    userTaxId(taxId: $taxId) {
      _id
      taxId
      name
    }
  }
`;

const FIND_TRANSACTIO_SENDER = gql`
  query FindSenderTransactions($senderId: ID!) {
    transactionBySender(senderId: $senderId) {
      _id

      receiver {
        name
      }
      value
    }
  }
`;

const FIND_TRANSACTIO_RECEIVER = gql`
  query FindReceiverTransactions($receiverId: ID!) {
    transactionByReceiver(receiverId: $receiverId) {
      _id
      sender {
        name
      }

      value
    }
  }
`;

export {
  FIND_ACCOUNT,
  FIND_USER,
  FIND_TRANSACTIO_SENDER,
  FIND_TRANSACTIO_RECEIVER,
};
