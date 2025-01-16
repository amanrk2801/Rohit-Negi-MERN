# TypeScript Basics

## Installation

### Install TypeScript Compiler
```bash
npm install -g typescript
tsc --version
```

### Initialize Config File
```bash
tsc --init
```

## Running TypeScript Files
```bash
tsc file_name
tsc yourfile.ts --target es2016
```

### Watch Mode
```bash
tsc --watch
```

#### Quit Watch Mode
Press `Ctrl+C`

## TypeScript Features

### Handling Primitive Types

#### Number
```typescript
let age: number = 30;
```

#### String
```typescript
let name: string = "Alice";
```

#### BigInt
```typescript
let largeNumber: bigint = 123456789012345678901234567890n;
```

#### Boolean
```typescript
let isActive: boolean = true;
```

#### Undefined
```typescript
let value: undefined;
```

#### Null
```typescript
let value: null = null;
```

### Type Inference
TypeScript can infer the type of a variable based on the value assigned to it.

#### Example
```typescript
let age = 25;  // TypeScript infers that age is of type 'number'
let name = "Alice";  // TypeScript infers that name is of type 'string'
```

### Explicit Type Annotations
You can assign types explicitly.

### Limitations of Type Inference
If a value is not initialized, TypeScript infers the type as `any`.

#### Example
```typescript
let value: any = 42;
```

### Special Types

#### `any`
Allows any type of value without type checking.

#### `unknown`
Safer than `any`; operations on `unknown` values require type checks.

### Non-Primitive Data Types

#### Array
```typescript
let numbers: number[] = [2, 3, 4, 6];
let mixed: (string | number)[] = [2, 3, 4, 5, 6, "Mohit"];
```

#### Tuples
Fixed number of elements with specific types.
```typescript
let tuple: [string, number] = ["Rohit", 10];
```

## Errors

### Compile-Time Errors
Detected during code compilation.
- Examples:
  - Syntax errors (e.g., missing semicolons).
  - Type mismatches.
  - Missing required variable initialization.

### Runtime Errors
Detected during program execution.
- Examples:
  - Dividing by zero.
  - Accessing undefined variables or null references.
  - Running out of memory.

## Objects

### Inline Object
```typescript
let person: { name: string; age: number; isStudent: boolean };

person = {
    name: "Rohit",
    age: 23,
    isStudent: true
};
```

### Using Type Aliases
```typescript
type Student = {
   names: string,
   age: number
};

let collegeStudent: Student = {
    names: "Rohit",
    age: 20
};
```

### Using Interfaces
```typescript
interface Customer {
    name: string,
    account_number: number,
    balance: number,
    age: number 
}

let customer: Customer = {
    name: "Rohit",
    account_number: 230921,
    balance: 420,
    age: 12
};
```

### Extending Interfaces
```typescript
interface Animal {
    species: string;
}

interface Pet extends Animal {
    name: string;
}
```

### Declaration Merging
Interfaces allow merging declarations.
```typescript
interface Person {
    name: string;
}

interface Person {
    age: number;
}
```
> Note: Declaration merging is not allowed with type aliases.

### Optional Properties
Use `?` to define optional properties.
```typescript
let account: { name: string; balance: number; age?: number } = {
    name: "Rohit",
    balance: 420
};
```

### Nested Objects
Objects can be nested as needed.

### Utility Types
- `Partial<T>`: Makes all properties optional.
- `Required<T>`: Makes all properties required.
- `Readonly<T>`: Makes all properties read-only.

### Arrays of Objects
```typescript
let people: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
```

## Functions

### Basic Function
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

### Optional Parameters
```typescript
function meet(name?: string): void {
    console.log(`Hello ${name || "Guest"}`);
}
```

### Default Parameters
```typescript
function welcome(name: string = "Guest"): void {
    console.log(`Welcome, ${name}!`);
}
