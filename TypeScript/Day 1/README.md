# TypeScript Cheatsheet

A concise guide for working with TypeScript.

---

## Table of Contents
1. [Install TypeScript](#install-typescript)
2. [Basic Types](#basic-types)
3. [Functions](#functions)
4. [Interfaces and Types](#interfaces-and-types)
5. [Classes](#classes)
6. [Generics](#generics)
7. [Modules](#modules)
8. [Utility Types](#utility-types)

---

## Install TypeScript

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation Steps
1. Install TypeScript globally using npm:
   ```bash
   npm install -g typescript
   ```

2. Verify the installation:
   ```bash
   tsc --version
   ```
   This should display the installed TypeScript version.

3. Initialize a TypeScript project (optional):
   ```bash
   tsc --init
   ```
   This generates a `tsconfig.json` file to configure TypeScript options.

4. Compile a TypeScript file:
   ```bash
   tsc filename.ts
   ```
   - ES2016
   ```bash
   tsc filename.ts --target es2016
   ```
   This generates a `filename.js` file.

---

## Basic Types
```typescript
let isDone: boolean = false;
let count: number = 42;
let name: string = "John";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let anything: any = "Could be anything";
let unknownValue: unknown = 42;
let nothing: void = undefined;
let notPresent: null = null;
let notInitialized: undefined = undefined;
let id: symbol = Symbol("id");
```

---

## Functions
```typescript
function add(x: number, y: number): number {
  return x + y;
}

const multiply = (x: number, y: number): number => x * y;

function greet(name: string, age?: number): string {
  return `Hello, ${name}`;
}

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Interfaces and Types
```typescript
interface User {
  id: number;
  name: string;
  isActive?: boolean;
}

type Role = "admin" | "user" | "guest";

const user: User = { id: 1, name: "Alice" };
const role: Role = "admin";
```

---

## Classes
```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.bark();
dog.move(10);
```

---

## Generics
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>("Hello, TypeScript");

interface Box<T> {
  contents: T;
}

const box: Box<number> = { contents: 42 };
```

---

## Modules
```typescript
// utils.ts
export const add = (x: number, y: number): number => x + y;

// main.ts
import { add } from "./utils";
console.log(add(1, 2));
```

---

## Utility Types
```typescript
interface User {
  id: number;
  name: string;
  age?: number;
}

const partialUser: Partial<User> = { name: "Bob" };
const readOnlyUser: Readonly<User> = { id: 1, name: "Alice" };
const pickedUser: Pick<User, "id" | "name"> = { id: 1, name: "Alice" };
const record: Record<string, number> = { key1: 1, key2: 2 };
```

---

## Advanced Features

### Type Assertions
```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```

### Type Guards
```typescript
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

if (isNumber(42)) {
  console.log("It's a number!");
}
```

---

## Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/)

---

Happy Coding!
