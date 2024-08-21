// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class DeliberationConfig extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DeliberationConfig entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DeliberationConfig must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("DeliberationConfig", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DeliberationConfig | null {
    return changetype<DeliberationConfig | null>(
      store.get_in_block("DeliberationConfig", id),
    );
  }

  static load(id: string): DeliberationConfig | null {
    return changetype<DeliberationConfig | null>(
      store.get("DeliberationConfig", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get expiryDuration(): BigInt {
    let value = this.get("expiryDuration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set expiryDuration(value: BigInt) {
    this.set("expiryDuration", Value.fromBigInt(value));
  }

  get snapInterval(): BigInt {
    let value = this.get("snapInterval");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set snapInterval(value: BigInt) {
    this.set("snapInterval", Value.fromBigInt(value));
  }

  get repsNum(): BigInt {
    let value = this.get("repsNum");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set repsNum(value: BigInt) {
    this.set("repsNum", Value.fromBigInt(value));
  }

  get quorumScore(): BigInt {
    let value = this.get("quorumScore");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set quorumScore(value: BigInt) {
    this.set("quorumScore", Value.fromBigInt(value));
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Proposal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Proposal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Proposal", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get_in_block("Proposal", id));
  }

  static load(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get("Proposal", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get headers(): HeaderLoader {
    return new HeaderLoader("Proposal", this.get("id")!.toString(), "headers");
  }

  get cmds(): CommandLoader {
    return new CommandLoader("Proposal", this.get("id")!.toString(), "cmds");
  }

  get proposer(): Bytes | null {
    let value = this.get("proposer");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set proposer(value: Bytes | null) {
    if (!value) {
      this.unset("proposer");
    } else {
      this.set("proposer", Value.fromBytes(<Bytes>value));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (!value) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get expirationTime(): BigInt | null {
    let value = this.get("expirationTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expirationTime(value: BigInt | null) {
    if (!value) {
      this.unset("expirationTime");
    } else {
      this.set("expirationTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get reps(): Array<Bytes> | null {
    let value = this.get("reps");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set reps(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("reps");
    } else {
      this.set("reps", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get votes(): VoteLoader {
    return new VoteLoader("Proposal", this.get("id")!.toString(), "votes");
  }

  get approvedHeaderId(): BigInt | null {
    let value = this.get("approvedHeaderId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set approvedHeaderId(value: BigInt | null) {
    if (!value) {
      this.unset("approvedHeaderId");
    } else {
      this.set("approvedHeaderId", Value.fromBigInt(<BigInt>value));
    }
  }

  get approvedCommandId(): BigInt | null {
    let value = this.get("approvedCommandId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set approvedCommandId(value: BigInt | null) {
    if (!value) {
      this.unset("approvedCommandId");
    } else {
      this.set("approvedCommandId", Value.fromBigInt(<BigInt>value));
    }
  }

  get fullyExecuted(): boolean {
    let value = this.get("fullyExecuted");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set fullyExecuted(value: boolean) {
    this.set("fullyExecuted", Value.fromBoolean(value));
  }

  get vrfRequestId(): BigInt | null {
    let value = this.get("vrfRequestId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set vrfRequestId(value: BigInt | null) {
    if (!value) {
      this.unset("vrfRequestId");
    } else {
      this.set("vrfRequestId", Value.fromBigInt(<BigInt>value));
    }
  }

  get snapInterval(): BigInt | null {
    let value = this.get("snapInterval");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set snapInterval(value: BigInt | null) {
    if (!value) {
      this.unset("snapInterval");
    } else {
      this.set("snapInterval", Value.fromBigInt(<BigInt>value));
    }
  }

  get snappedEpoch(): Array<BigInt> | null {
    let value = this.get("snappedEpoch");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set snappedEpoch(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("snappedEpoch");
    } else {
      this.set("snappedEpoch", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get top3Headers(): Array<string> | null {
    let value = this.get("top3Headers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set top3Headers(value: Array<string> | null) {
    if (!value) {
      this.unset("top3Headers");
    } else {
      this.set("top3Headers", Value.fromStringArray(<Array<string>>value));
    }
  }

  get top3Commands(): Array<string> | null {
    let value = this.get("top3Commands");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set top3Commands(value: Array<string> | null) {
    if (!value) {
      this.unset("top3Commands");
    } else {
      this.set("top3Commands", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Header extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Header entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Header must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Header", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Header | null {
    return changetype<Header | null>(store.get_in_block("Header", id));
  }

  static load(id: string): Header | null {
    return changetype<Header | null>(store.get("Header", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get contents(): string | null {
    let value = this.get("contents");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contents(value: string | null) {
    if (!value) {
      this.unset("contents");
    } else {
      this.set("contents", Value.fromString(<string>value));
    }
  }
}

export class HeaderContents extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HeaderContents entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HeaderContents must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("HeaderContents", id.toString(), this);
    }
  }

  static loadInBlock(id: string): HeaderContents | null {
    return changetype<HeaderContents | null>(
      store.get_in_block("HeaderContents", id),
    );
  }

  static load(id: string): HeaderContents | null {
    return changetype<HeaderContents | null>(store.get("HeaderContents", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get body(): string | null {
    let value = this.get("body");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set body(value: string | null) {
    if (!value) {
      this.unset("body");
    } else {
      this.set("body", Value.fromString(<string>value));
    }
  }
}

export class Command extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Command entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Command must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Command", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Command | null {
    return changetype<Command | null>(store.get_in_block("Command", id));
  }

  static load(id: string): Command | null {
    return changetype<Command | null>(store.get("Command", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get actions(): ActionLoader {
    return new ActionLoader("Command", this.get("id")!.toString(), "actions");
  }
}

export class Action extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Action entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Action must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Action", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Action | null {
    return changetype<Action | null>(store.get_in_block("Action", id));
  }

  static load(id: string): Action | null {
    return changetype<Action | null>(store.get("Action", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get command(): string {
    let value = this.get("command");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set command(value: string) {
    this.set("command", Value.fromString(value));
  }

  get func(): string {
    let value = this.get("func");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set func(value: string) {
    this.set("func", Value.fromString(value));
  }

  get abiParams(): Bytes {
    let value = this.get("abiParams");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set abiParams(value: Bytes) {
    this.set("abiParams", Value.fromBytes(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Vote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Vote", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Vote | null {
    return changetype<Vote | null>(store.get_in_block("Vote", id));
  }

  static load(id: string): Vote | null {
    return changetype<Vote | null>(store.get("Vote", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get rep(): Bytes {
    let value = this.get("rep");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set rep(value: Bytes) {
    this.set("rep", Value.fromBytes(value));
  }

  get rankedHeaderIds(): Array<BigInt> | null {
    let value = this.get("rankedHeaderIds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set rankedHeaderIds(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("rankedHeaderIds");
    } else {
      this.set("rankedHeaderIds", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get rankedCommandIds(): Array<BigInt> | null {
    let value = this.get("rankedCommandIds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set rankedCommandIds(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("rankedCommandIds");
    } else {
      this.set("rankedCommandIds", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }
}

export class Text extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Text entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Text must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Text", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Text | null {
    return changetype<Text | null>(store.get_in_block("Text", id));
  }

  static load(id: string): Text | null {
    return changetype<Text | null>(store.get("Text", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contents(): string | null {
    let value = this.get("contents");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contents(value: string | null) {
    if (!value) {
      this.unset("contents");
    } else {
      this.set("contents", Value.fromString(<string>value));
    }
  }
}

export class TextContents extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TextContents entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TextContents must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TextContents", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TextContents | null {
    return changetype<TextContents | null>(
      store.get_in_block("TextContents", id),
    );
  }

  static load(id: string): TextContents | null {
    return changetype<TextContents | null>(store.get("TextContents", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get body(): string | null {
    let value = this.get("body");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set body(value: string | null) {
    if (!value) {
      this.unset("body");
    } else {
      this.set("body", Value.fromString(<string>value));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Member entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Member must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Member", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Member | null {
    return changetype<Member | null>(store.get_in_block("Member", id));
  }

  static load(id: string): Member | null {
    return changetype<Member | null>(store.get("Member", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addr(): Bytes {
    let value = this.get("addr");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set addr(value: Bytes) {
    this.set("addr", Value.fromBytes(value));
  }

  get info(): string | null {
    let value = this.get("info");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set info(value: string | null) {
    if (!value) {
      this.unset("info");
    } else {
      this.set("info", Value.fromString(<string>value));
    }
  }
}

export class MemberInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MemberInfo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("MemberInfo", id.toString(), this);
    }
  }

  static loadInBlock(id: string): MemberInfo | null {
    return changetype<MemberInfo | null>(store.get_in_block("MemberInfo", id));
  }

  static load(id: string): MemberInfo | null {
    return changetype<MemberInfo | null>(store.get("MemberInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }
}

export class HeaderLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Header[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Header[]>(value);
  }
}

export class CommandLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Command[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Command[]>(value);
  }
}

export class VoteLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Vote[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Vote[]>(value);
  }
}

export class ActionLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Action[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Action[]>(value);
  }
}
