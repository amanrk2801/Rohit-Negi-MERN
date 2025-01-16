# TypeScript Guide

## Installation

1. Install TypeScript compiler globally:
   ```bash
   npm install -g typescript
   ```

2. Check TypeScript version:
   ```bash
   tsc --version
   ```

3. Compile a TypeScript file:
   ```bash
   tsc file_name
   ```

4. Compile with a specific target:
   ```bash
   tsc yourfile.ts --target es2016
   ```

5. Initialize the config file:
   ```bash
   tsc --init
   ```

6. Running TypeScript Compiler:
   - Compile and watch mode:
     ```bash
     tsc --watch
     ```

7. To quit watch mode:
   - Press `ctrl + C`

## Data Types

### Primitives

1. **Number**
   ```typescript
   let age: number = 30;
   ```

2. **String**
   ```typescript
   let name: string = "Alice";
   ```

3. **BigInt**
   ```typescript
   let largeNumber: bigint = 123456789012345678901234567890n;
   ```

4. **Boolean**
   ```typescript
   let isActive: boolean = true;
   ```

5. **Undefined**
   ```typescript
   let value: undefined;
   ```

6. **Null**
   ```typescript
   let value: null = null;
   ```

### Type Inference
TypeScript automatically infers types based on the assigned value.

```typescript
let age = 25;  // TypeScript infers that age is of type 'number'
let name = "Alice";  // TypeScript infers that name is of type 'string'
```

### Explicit Type Annotations
When we explicitly define the type.

### Limitations of Type Inference
- `any`: If we don't initialize the value initially.

```typescript
let value: any = 42; // Represents any type of value.
```

- `unknown`: Safer than `any`, as it requires type narrowing before usage.

```typescript
let value: unknown;
```

## Non-Primitive Data Types

### 1. Array
```typescript
let numbers: number[] = [2, 3, 4, 6];
let mixedNumbers: (string | number)[] = [2, 3, 4, 5, 6, "Mohit"];
```

### 2. Tuples
Fixed-length arrays with specific types.

```typescript
let tuple: [string, number] = ["Rohit", 10];
```

## Compile-time vs Runtime

### Compile-time
- The phase when source code is translated into machine code.
- Errors detected during this phase are compile-time errors (e.g., syntax errors, type mismatches).

### Runtime
- The phase when the program is executed.
- Errors detected during this phase are runtime errors (e.g., dividing by zero, accessing undefined variables).

## Objects

### Inline Object Declaration
```typescript
let account: { name: string, balance: number, age?: number } = {
    name: "Rohit",
    balance: 420
};
```

### Using Type Aliases
```typescript
type student = {
   names: string,
   age: number
};

let College_student: student = {
    names: "Rohit",
    age: 20
};
```

### Using Interfaces
```typescript
interface customer {
    name: string,
    account_number: number,
    balance: number,
    age: number
}

let per: customer = {
    name: "Rohit",
    account_number: 230921,
    balance: 420,
    age: 12
};
```

### Extending with Interface
You can extend types using intersections.

```typescript
type animal = gen & { ... };
```

### Declaration Merging
Interfaces support declaration merging, but types do not.

```typescript
interface person {
    name: string;
}

interface person {
    age: number;
}
```

## Optional Parameters
- Use the `?` symbol to make parameters optional.

```typescript
function meet(name?: string): void {
    console.log(`Hello ${name || "Guest"}`);
}
```

## Function Parameters and Types

### Default Parameters
You can set default values for function parameters.

### Arrow Function
```typescript
const multiply = (a: number, b: number): number => a * b;
```

### Rest Parameters
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
```

### Callback Functions
```typescript
type chill = (a: number) => void;
```

## Classes in TypeScript

### Class Definition
```typescript
class Bank {
    name: string;
    age: number;
    account: number;

    constructor(name: string, age: number, account: number) {
        this.name = name;
        this.age = age;
        this.account = account;
    }

    greet(): void {
        console.log(`Hello ${this.name}`);
    }
}

const B1 = new Bank("Rohit", 20, 102);
```

### Access Modifiers

- `public`: Default, accessible everywhere.
- `private`: Accessible only within the class.
- `protected`: Accessible within the class and its subclasses.

### Inheritance
- Use the `super` keyword to call the constructor or methods of the parent class.

## Generics

Generics allow creating flexible, reusable components.

### Generic Function
```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity(5));           // Works with numbers
console.log(identity("Hello"));     // Works with strings
console.log(identity([1, 2, 3]));   // Works with arrays
```

### Generic Interfaces
```typescript
interface Person<T> {
    name: string;
    age: number;
    id: T;
}
```

### Multiple Generics
You can use multiple generics in functions or interfaces.
```