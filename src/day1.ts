// Day 1 - TypeScript Tasks

// 1) Basic Type & Interface Practice: define User interface with optional fields
interface User {
    name: string;
    email: string;
    phone?: string;
    active?: boolean;
}

const exampleUser: User = {
    name: "Oni",
    email: "tasminahmedoni909@example.com",
    active: true
};

console.log("User:", exampleUser);

// 2) Union & Type Narrowing: handle number | string input safely
function normalizeToNumber(value: number | string): number {
    if (typeof value === "number") {
        return value;
    }
    const parsed = Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
}

console.log("normalizeToNumber(42):", normalizeToNumber(42));
console.log("normalizeToNumber('123'):", normalizeToNumber("123"));
console.log("normalizeToNumber('abc'):", normalizeToNumber("abc"));

// 3) Array & Object Typing: type a list of products
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { name: "Keyboard", price: 49.99, inStock: true },
    { name: "Mouse", price: 24.5, inStock: false },
    { name: "Monitor", price: 199.0, inStock: true },
];

console.log("Products in stock:", products.filter(p => p.inStock));

// 4) Function with Generics: getFirstItem<T>(arr: T[]): T | null
function getFirstItem<T>(arr: T[]): T | null {
    const first = arr[0];
    return first === undefined ? null : first;
}

console.log("First product:", getFirstItem(products));
console.log("First number:", getFirstItem<number>([1, 2, 3]));

// 5) Readonly & Partial Utility: use Readonly and Partial with interfaces
const readonlyUser: Readonly<User> = {
    name: "Oni",
    email: "tasminahmedoni909@example.com",
};

function applyUserUpdate(user: User, update: Partial<User>): User {
    return { ...user, ...update };
}

const updatedUser = applyUserUpdate(exampleUser, { phone: "01783384722" });
console.log("Updated user:", updatedUser);
console.log("Readonly user:", readonlyUser);

// 6) Type Assertion & Casting: safely cast unknown to string
function toSafeString(value: unknown): string {
    if (typeof value === "string") {
        return value;
    }
    return JSON.stringify(value);
}

console.log("toSafeString('hello'):", toSafeString("hello"));
console.log("toSafeString(123):", toSafeString(123));

// 7) Enum & Literal Type: define enum Role { Admin, User }
enum Role {
    Admin,
    User,
}

let role: Role = Role.Admin;
console.log("Role:", Role[role]);

// 8) Function Return Type Practice: type function that returns Promise<User[]>
async function fetchUsers(): Promise<User[]> {
    // Simulated async load
    const rows: User[] = [
        { name: "Tasmin", email: "tasmin@example.com", active: true },
        { name: "Oni", email: "oni@example.com" },
    ];
    await new Promise(resolve => setTimeout(resolve, 10));
    return rows;
}

fetchUsers().then(list => console.log("Fetched users:", list));
