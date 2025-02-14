/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  containsBytes,
  fixEncoderSize,
  getBytesEncoder,
} from '@solana/web3.js';
import {
  ParsedAddMetadataInstruction,
  ParsedAddMintToGroupInstruction,
  ParsedAddRoyaltiesInstruction,
  ParsedApproveTransferInstruction,
  ParsedBurnMintAccountInstruction,
  ParsedCreateGroupAccountInstruction,
  ParsedCreateMintAccountInstruction,
  ParsedExecuteInstruction,
  ParsedFreezeMintAccountInstruction,
  ParsedInitManagerAccountInstruction,
  ParsedModifyRoyaltiesInstruction,
  ParsedRemoveMetadataInstruction,
  ParsedRemoveMintFromGroupInstruction,
  ParsedResizeApproveInstruction,
  ParsedResizeGroupInstruction,
  ParsedResizeGroupMemberInstruction,
  ParsedResizeManagerInstruction,
  ParsedThawMintAccountInstruction,
  ParsedUpdateGroupAccountInstruction,
} from '../instructions';

export const WEN_NEW_STANDARD_PROGRAM_ADDRESS =
  'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM' as Address<'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM'>;

export enum WenNewStandardAccount {
  ApproveAccount,
  Manager,
  TokenGroup,
  TokenGroupMember,
}

export function identifyWenNewStandardAccount(
  account: { data: Uint8Array } | Uint8Array
): WenNewStandardAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([218, 253, 170, 2, 4, 47, 25, 99])
      ),
      0
    )
  ) {
    return WenNewStandardAccount.ApproveAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([221, 78, 171, 233, 213, 142, 113, 56])
      ),
      0
    )
  ) {
    return WenNewStandardAccount.Manager;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([184, 107, 4, 187, 196, 55, 142, 134])
      ),
      0
    )
  ) {
    return WenNewStandardAccount.TokenGroup;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([17, 208, 50, 173, 30, 127, 245, 94])
      ),
      0
    )
  ) {
    return WenNewStandardAccount.TokenGroupMember;
  }
  throw new Error(
    'The provided account could not be identified as a wenNewStandard account.'
  );
}

export enum WenNewStandardInstruction {
  AddMetadata,
  AddMintToGroup,
  AddRoyalties,
  ApproveTransfer,
  BurnMintAccount,
  CreateGroupAccount,
  CreateMintAccount,
  Execute,
  FreezeMintAccount,
  InitManagerAccount,
  ModifyRoyalties,
  RemoveMetadata,
  RemoveMintFromGroup,
  ResizeApprove,
  ResizeGroup,
  ResizeGroupMember,
  ResizeManager,
  ThawMintAccount,
  UpdateGroupAccount,
}

export function identifyWenNewStandardInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): WenNewStandardInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([231, 195, 40, 240, 67, 231, 53, 136])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.AddMetadata;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([236, 25, 99, 48, 185, 60, 235, 112])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.AddMintToGroup;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([195, 251, 126, 230, 187, 134, 168, 210])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.AddRoyalties;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([198, 217, 247, 150, 208, 60, 169, 244])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ApproveTransfer;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([60, 58, 247, 183, 185, 54, 114, 131])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.BurnMintAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([34, 65, 118, 12, 64, 190, 211, 145])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.CreateGroupAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([76, 184, 50, 62, 162, 141, 47, 103])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.CreateMintAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([105, 37, 101, 197, 75, 251, 102, 26])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.Execute;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([171, 30, 154, 191, 27, 0, 134, 216])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.FreezeMintAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([63, 114, 69, 118, 3, 198, 215, 72])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.InitManagerAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([199, 95, 20, 107, 136, 161, 93, 137])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ModifyRoyalties;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([81, 68, 231, 49, 91, 8, 111, 160])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.RemoveMetadata;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([231, 224, 145, 240, 192, 4, 204, 218])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.RemoveMintFromGroup;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([219, 6, 54, 192, 97, 199, 33, 25])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ResizeApprove;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([57, 175, 155, 98, 160, 54, 88, 105])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ResizeGroup;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([234, 11, 246, 127, 141, 10, 4, 4])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ResizeGroupMember;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([245, 209, 10, 73, 190, 27, 17, 226])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ResizeManager;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([27, 53, 61, 16, 162, 190, 27, 72])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.ThawMintAccount;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([153, 106, 174, 53, 133, 171, 207, 52])
      ),
      0
    )
  ) {
    return WenNewStandardInstruction.UpdateGroupAccount;
  }
  throw new Error(
    'The provided instruction could not be identified as a wenNewStandard instruction.'
  );
}

export type ParsedWenNewStandardInstruction<
  TProgram extends string = 'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM',
> =
  | ({
      instructionType: WenNewStandardInstruction.AddMetadata;
    } & ParsedAddMetadataInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.AddMintToGroup;
    } & ParsedAddMintToGroupInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.AddRoyalties;
    } & ParsedAddRoyaltiesInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ApproveTransfer;
    } & ParsedApproveTransferInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.BurnMintAccount;
    } & ParsedBurnMintAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.CreateGroupAccount;
    } & ParsedCreateGroupAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.CreateMintAccount;
    } & ParsedCreateMintAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.Execute;
    } & ParsedExecuteInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.FreezeMintAccount;
    } & ParsedFreezeMintAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.InitManagerAccount;
    } & ParsedInitManagerAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ModifyRoyalties;
    } & ParsedModifyRoyaltiesInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.RemoveMetadata;
    } & ParsedRemoveMetadataInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.RemoveMintFromGroup;
    } & ParsedRemoveMintFromGroupInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ResizeApprove;
    } & ParsedResizeApproveInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ResizeGroup;
    } & ParsedResizeGroupInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ResizeGroupMember;
    } & ParsedResizeGroupMemberInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ResizeManager;
    } & ParsedResizeManagerInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.ThawMintAccount;
    } & ParsedThawMintAccountInstruction<TProgram>)
  | ({
      instructionType: WenNewStandardInstruction.UpdateGroupAccount;
    } & ParsedUpdateGroupAccountInstruction<TProgram>);
