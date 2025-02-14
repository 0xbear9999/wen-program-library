/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  IAccountMeta,
  IAccountSignerMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  ReadonlyUint8Array,
  TransactionSigner,
  WritableAccount,
  WritableSignerAccount,
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
} from '@solana/web3.js';
import { WEN_NEW_STANDARD_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  CreateGroupAccountArgs,
  CreateGroupAccountArgsArgs,
  getCreateGroupAccountArgsDecoder,
  getCreateGroupAccountArgsEncoder,
} from '../types';

export type CreateGroupAccountInstruction<
  TProgram extends string = typeof WEN_NEW_STANDARD_PROGRAM_ADDRESS,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountReceiver extends string | IAccountMeta<string> = string,
  TAccountGroup extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintTokenAccount extends string | IAccountMeta<string> = string,
  TAccountManager extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountAssociatedTokenProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountReceiver extends string
        ? ReadonlyAccount<TAccountReceiver>
        : TAccountReceiver,
      TAccountGroup extends string
        ? WritableAccount<TAccountGroup>
        : TAccountGroup,
      TAccountMint extends string
        ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
        : TAccountMint,
      TAccountMintTokenAccount extends string
        ? WritableAccount<TAccountMintTokenAccount>
        : TAccountMintTokenAccount,
      TAccountManager extends string
        ? ReadonlyAccount<TAccountManager>
        : TAccountManager,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CreateGroupAccountInstructionData = {
  discriminator: ReadonlyUint8Array;
  args: CreateGroupAccountArgs;
};

export type CreateGroupAccountInstructionDataArgs = {
  args: CreateGroupAccountArgsArgs;
};

export function getCreateGroupAccountInstructionDataEncoder(): Encoder<CreateGroupAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['args', getCreateGroupAccountArgsEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([34, 65, 118, 12, 64, 190, 211, 145]),
    })
  );
}

export function getCreateGroupAccountInstructionDataDecoder(): Decoder<CreateGroupAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['args', getCreateGroupAccountArgsDecoder()],
  ]);
}

export function getCreateGroupAccountInstructionDataCodec(): Codec<
  CreateGroupAccountInstructionDataArgs,
  CreateGroupAccountInstructionData
> {
  return combineCodec(
    getCreateGroupAccountInstructionDataEncoder(),
    getCreateGroupAccountInstructionDataDecoder()
  );
}

export type CreateGroupAccountInput<
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountReceiver extends string = string,
  TAccountGroup extends string = string,
  TAccountMint extends string = string,
  TAccountMintTokenAccount extends string = string,
  TAccountManager extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  payer: TransactionSigner<TAccountPayer>;
  authority: TransactionSigner<TAccountAuthority>;
  receiver: Address<TAccountReceiver>;
  group: Address<TAccountGroup>;
  mint: TransactionSigner<TAccountMint>;
  mintTokenAccount: Address<TAccountMintTokenAccount>;
  manager: Address<TAccountManager>;
  systemProgram?: Address<TAccountSystemProgram>;
  associatedTokenProgram?: Address<TAccountAssociatedTokenProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  args: CreateGroupAccountInstructionDataArgs['args'];
};

export function getCreateGroupAccountInstruction<
  TAccountPayer extends string,
  TAccountAuthority extends string,
  TAccountReceiver extends string,
  TAccountGroup extends string,
  TAccountMint extends string,
  TAccountMintTokenAccount extends string,
  TAccountManager extends string,
  TAccountSystemProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountTokenProgram extends string,
>(
  input: CreateGroupAccountInput<
    TAccountPayer,
    TAccountAuthority,
    TAccountReceiver,
    TAccountGroup,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountManager,
    TAccountSystemProgram,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram
  >
): CreateGroupAccountInstruction<
  typeof WEN_NEW_STANDARD_PROGRAM_ADDRESS,
  TAccountPayer,
  TAccountAuthority,
  TAccountReceiver,
  TAccountGroup,
  TAccountMint,
  TAccountMintTokenAccount,
  TAccountManager,
  TAccountSystemProgram,
  TAccountAssociatedTokenProgram,
  TAccountTokenProgram
> {
  // Program address.
  const programAddress = WEN_NEW_STANDARD_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    receiver: { value: input.receiver ?? null, isWritable: false },
    group: { value: input.group ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintTokenAccount: {
      value: input.mintTokenAccount ?? null,
      isWritable: true,
    },
    manager: { value: input.manager ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.associatedTokenProgram.value) {
    accounts.associatedTokenProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb' as Address<'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.receiver),
      getAccountMeta(accounts.group),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintTokenAccount),
      getAccountMeta(accounts.manager),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getCreateGroupAccountInstructionDataEncoder().encode(
      args as CreateGroupAccountInstructionDataArgs
    ),
  } as CreateGroupAccountInstruction<
    typeof WEN_NEW_STANDARD_PROGRAM_ADDRESS,
    TAccountPayer,
    TAccountAuthority,
    TAccountReceiver,
    TAccountGroup,
    TAccountMint,
    TAccountMintTokenAccount,
    TAccountManager,
    TAccountSystemProgram,
    TAccountAssociatedTokenProgram,
    TAccountTokenProgram
  >;

  return instruction;
}

export type ParsedCreateGroupAccountInstruction<
  TProgram extends string = typeof WEN_NEW_STANDARD_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    payer: TAccountMetas[0];
    authority: TAccountMetas[1];
    receiver: TAccountMetas[2];
    group: TAccountMetas[3];
    mint: TAccountMetas[4];
    mintTokenAccount: TAccountMetas[5];
    manager: TAccountMetas[6];
    systemProgram: TAccountMetas[7];
    associatedTokenProgram: TAccountMetas[8];
    tokenProgram: TAccountMetas[9];
  };
  data: CreateGroupAccountInstructionData;
};

export function parseCreateGroupAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateGroupAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 10) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      authority: getNextAccount(),
      receiver: getNextAccount(),
      group: getNextAccount(),
      mint: getNextAccount(),
      mintTokenAccount: getNextAccount(),
      manager: getNextAccount(),
      systemProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      tokenProgram: getNextAccount(),
    },
    data: getCreateGroupAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
