// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { Storage } from "bundle/textDAO/storages/Storage.sol";
import { Schema } from "bundle/textDAO/storages/Schema.sol";

contract ProtectionBase {
    error ProposalNotExpiredYet();
    error ProposalNotTalliedYet();

    modifier protected(uint pid) {
        Schema.ProposalMeta storage $proposal = Storage.$Proposals().proposals[pid].proposalMeta;
        Schema.ProposalsConfig storage $config = Storage.$Proposals().config;
        if (block.timestamp <= $proposal.createdAt + $config.expiryDuration) revert ProposalNotExpiredYet();
        if ($proposal.cmdRank.length == 0) revert ProposalNotTalliedYet();
        _;
    }

}