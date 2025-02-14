/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Account,
  Address,
  Codec,
  Decoder,
  EncodedAccount,
  Encoder,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  ReadonlyUint8Array,
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  transformEncoder,
} from '@solana/web3.js';

export type ApproveAccount = {
  discriminator: ReadonlyUint8Array;
  slot: bigint;
};

export type ApproveAccountArgs = { slot: number | bigint };

export function getApproveAccountEncoder(): Encoder<ApproveAccountArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['slot', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([218, 253, 170, 2, 4, 47, 25, 99]),
    })
  );
}

export function getApproveAccountDecoder(): Decoder<ApproveAccount> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['slot', getU64Decoder()],
  ]);
}

export function getApproveAccountCodec(): Codec<
  ApproveAccountArgs,
  ApproveAccount
> {
  return combineCodec(getApproveAccountEncoder(), getApproveAccountDecoder());
}

export function decodeApproveAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<ApproveAccount, TAddress>;
export function decodeApproveAccount<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<ApproveAccount, TAddress>;
export function decodeApproveAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<ApproveAccount, TAddress> | MaybeAccount<ApproveAccount, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getApproveAccountDecoder()
  );
}

export async function fetchApproveAccount<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<ApproveAccount, TAddress>> {
  const maybeAccount = await fetchMaybeApproveAccount(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeApproveAccount<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<ApproveAccount, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeApproveAccount(maybeAccount);
}

export async function fetchAllApproveAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<ApproveAccount>[]> {
  const maybeAccounts = await fetchAllMaybeApproveAccount(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeApproveAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<ApproveAccount>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeApproveAccount(maybeAccount)
  );
}
