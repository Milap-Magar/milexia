import { Client, Account } from "appwrite";

const client: Client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67199e6d003806eb71b8");

const account: Account = new Account(client);

export { account, client };
