// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Schema} from "bundle/textDAO/storages/Schema.sol";

interface TextDAOEvents {
    // Warnings
    /// @dev Thrown when a given header choice is out of range
    event WARN_HeaderChoiceIsOutOfRange(uint headerChoice);
    /// @dev Thrown when a given command choice is out of range
    event WARN_CommandChoiceIsOutOfRange(uint commandChoice);
    /// @dev Thrown when a given header choice is duplicate
    event WARN_HeaderChoiceIsDuplicate(uint headerChoice);
    /// @dev Thrown when a given command choice is duplicate
    event WARN_CommandChoiceIsDuplicate(uint commandChoice);

    // Proposal
    event HeaderCreated(uint pid, uint headerId, string metadataURI);
    event CommandCreated(uint pid, uint commandId, Schema.Action[] actions);

    // Propose
    event Proposed(uint pid, address proposer, uint256 createdAt, uint256 expirationTime);
    event RepresentativesAssigned(uint pid, address[] reps);
    event VRFRequested(uint pid, uint256 requestId);
    // Vote
    event Voted(uint pid, address rep, Schema.Vote vote);
    // Tally
    event ProposalTalliedWithTie(uint pid, uint[] approvedHeaderIds, uint[] approvedCommandIds, uint extendedExpirationTime);
    event ProposalTallied(uint pid, uint approvedHeaderId, uint approvedCommandId);
    event ProposalSnapped(uint pid, uint[] top3HeaderIds, uint[] top3CommandIds);
    // Execute
    event ProposalExecuted(uint pid, uint approvedCommandId);
    // SaveText
    event TextCreated(uint textId, string metadataURI);
    event TextUpdated(uint textId, string newMetadataURI);
    event TextDeleted(uint textId);
    /// @dev From Initializable @ openzeppelin-contracts~5.0.0
    event Initialized(uint64 version);
}
