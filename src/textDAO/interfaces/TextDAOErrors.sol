// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface TextDAOErrors {
    // OnlyMember
    error YouAreNotTheMember();
    // OnlyReps
    error YouAreNotTheRep();
    // OnlyVrfCoordinator
    error YouAreNotTheVrfCoordinator();
    // Protection
    error ActionNotApprovedYet();
    error ActionAlreadyExecuted();
}