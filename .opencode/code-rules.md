React Design Patterns & Best Practices
1. Component Architecture
Separation of Concerns (Container/Presenter): Decouple logic (data fetching, Zustand states, handlers) from UI. Presentational components should be pure and receive data via props.

Higher-Order Components (HOC): Use to inject cross-cutting concerns (e.g., withAuth, withGlassmorphism) without duplicating logic.

Render Props: Prefer for sharing dynamic rendering logic between components when a HOC isn't suitable.

2. Composition over Inheritance
Component Composition: Build complex UIs by combining smaller, specialized components. Utilize the children prop to create flexible layouts (e.g., your existing GlassCard).

3. State Management Strategy
Lifting State Up: Move state only as high as necessary. If two siblings need the same data, lift the state to their closest common parent.

Centralized State (Zustand): Use the Global Store only for data that truly transcends the entire app (User Session, Points, Music Queue). Use local useState for UI-specific or ephemeral data.

4. Custom Hooks for Logic Reuse
Encapsulated Logic: All complex logic or side effects (useEffect) must reside in a Custom Hook (e.g., usePointsCounter). This facilitates unit testing and keeps components declarative.

5. Performance Optimization
Memoization: Implement React.memo, useMemo, and useCallback to prevent unnecessary re-renders in expensive components (critical for audio lists and animations).

Virtualization: Use FlatList or FlashList for rendering large datasets to maintain high FPS.

6. Clean Code & Maintainability
Folder Structure: Organize by feature or domain (e.g., src/stores, src/hooks, src/services).

Strict Typing: Define precise interfaces for every prop. Avoid any at all costs.

Error Boundaries: Use them to catch rendering errors and show a fallback UI, preventing total app crashes.

refer .opencode/skills/react-best-practices/SKILL.md for detailed rules


1. Variables & Naming
Self-Documenting Names: better naming to describe what the code does.

Bad: const d = 30; | Good: const MAX_SESSION_DURATION_MINUTES = 30;

Boolean Prefixing: usage of is, has, should, o can for booleans.

Example: isPlayerReady, hasEarnedPoints, shouldShowModal.

No Magic Numbers: Define constantes para cualquier valor numérico con significado de negocio.

Example: const COMPLETION_THRESHOLD = 0.98; en lugar de usar 0.98 directamente en la lógica.

2. Component & Function Logic
No Inline Logic in JSX: Mantén el bloque return (JSX) lo más limpio posible. Extrae la lógica compleja a variables o funciones antes del return.

Bad: <Text>{points > 100 ? 'Expert' : 'Novice'}</Text>

Good: const userRank = points > 100 ? 'Expert' : 'Novice';

No Inline Functions in Props: Evita definir funciones anónimas dentro de las props para prevenir re-renders innecesarios.

Bad: <Button onPress="{()"> handlePress(id)} />

Good: <Button onPress="{onPressHandler}"/>

Small & Focused Functions: Si una función hace más de una cosa, divídela. Una función = una acción.

3. Styling & UI
No Inline Styles: Centraliza los estilos en StyleSheet.create o componentes estilizados. Los estilos inline saturan el componente y son menos performantes.

Early Returns (Guard Clauses): Evita el anidamiento excesivo de if/else.

TypeScript
if (!track) return null; // Guard clause
return <PlayerView track={track} />;
Conditional Rendering Simplicity: Si tienes muchas condiciones para mostrar algo, extrae esa lógica a una función renderHeader() o similar.

4. TypeScript & Data
Enums/Union Types over Strings: No uses strings planos para estados. Usa type Status = 'loading' | 'success' | 'error'.

Interface over Type for Objects: Usa interface para definir la forma de objetos y componentes, reserva type para uniones o alias.

Immutability: Nunca mutas el estado directamente. Usa siempre el spread operator ... o métodos no destructivos como .map(), .filter().

5. Maintenance & Quality
Remove Dead Code: Si no se usa, se borra. No comentes código "por si acaso"; para eso existe Git.

6. Avoid Deep Nesting: Si tu componente tiene más de 3 niveles de indentación, es hora de refactorizar en sub-componentes.

7. Single Source of Truth: No dupliques datos del Store en el estado local si no es estrictamente necesario para la UI inmediata.

8. No magic number: the rule prohibits the use of hardcoded, unexplained numeric literals (e.g., 0.25) in code, requiring them to be replaced by named constants (e.g., TAX_RATE). This improves code readability and maintainability by making the purpose of numbers clear



##10 Bulletproof Rules for Writing Clean Code

1. Use Names That Mean Something
Naming your variables or functions b or x is a crime. Call them what they are.

// Weak and vague
let b = 5;

// Strong and clear
let numberOfUsers = 5;
People who write unclear names DON'T want to own their mistakes. Don’t be that person.

2. Keep Functions Laser-Focused (SRP)
A function should do one thing—and do it perfectly. This is called the Single Responsibility Principle (SRP).

Good code is like a hammer. It hits ONE nail, not ten.

// Clean: One job, one focus
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`User: ${user}, Total: ${total}`);
}

// Dirty: Trying to do EVERYTHING
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`User: ${user}, Total: ${total}`);
}
When you mix tasks, you mix CONFUSION with disaster.

3. Silent Comments
You don’t explain what a door does EVERY time someone walks into a room. Your code should work the same way.

// Clean: Self-explanatory
let userAge = 25;

// Messy: Needs an explanation
let a; // This means "age of the user"
Comments aren’t bad, but if your code can’t stand on its own, you’ve already failed.

4. Make Your Code Readable
If someone reading your code feels like they’re solving a riddle, you ALREADY became a troublemaker.

// Clean: Reads like a story
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// Messy: Feels like chaos
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
Readable code isn’t just for others—it’s for you six months from now.

5. Test Everything You Write
If you’re too lazy to write tests, DON'T complain when your code breaks.

class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// Test it (Unit Test)
const calculator = new Calculator();
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
Tests are your insurance policy. Ignore them, and you’re gambling with your time.

6. Beware of Dependencies
Dependencies are like DEALS. Get the RIGHT ones, and you WIN. Choose badly, and you’re locked into something you’ll regret.

// Dependency: Sending emails with Nodemailer
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* config */ });
    return transporter.sendMail({ from: "you@example.com", to, subject, text: message });
}
Avoid hardcoding dependencies. Use abstraction or configuration files for secure maintenance.

This is just one example. As a developer, you may use HUNDREDS of libraries or dependencies.

I am not saying you should not rely on them, nowadays it is hard to avoid them. But you should be very careful BEFORE installing them in your coding projects.

You should check the security, performance, quality or functionality of an organization's software systems. Because they sometimes contain risks that can ruin your ENTIRE project.

Always CONTROL your tools, don't let them control YOU.

7. Organize Project Like a Boss
A well-organized project is the difference between a garage sale and a high-end boutique.

8. Be Consistent with Formatting
Don’t code like a person with 10 personalities. Be consistent with your formatting.

Use tools like Prettier or ESLint to enforce your CONSISTENT style. If every file looks different, you’re creating chaos that NO ONE wants to fix.

I would say, consistency in formatting is one of the most important aspects of clean coding.

Use 2 or 4 spaces for indentation consistently throughout your codebase. Avoid tabs to maintain uniformity across different editors.

Keep lines to a maximum of 100-120 characters to prevent horizontal scrolling and improve readability.

Group related logic together and separate blocks of code with blank lines to highlight their purpose.

Finally, avoid over-aligning code; instead, let indentation naturally guide the flow of logic.

9. Stop Hardcoding Values
Hardcoding is laziness disguised as effort.

// Bad: Hardcoded and rigid
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "Too many users!";
}

// Clean: Dynamic and flexible
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "Too many users!";
}
So, avoid it at all costs. Hardcoding is the shortcut that sends you off a cliff.

10. Keep Functions Short
If your function is longer than 20 lines, it’s probably trying to do too much. Break it down.

function updateCart(cart, item) {
    addItemToCart(cart, item);
    let total = calculateTotal(cart);
    logTransaction(item, total);
    return total;
}

function addItemToCart(cart, item) {
    cart.items.push(item);
}
Short functions are sharp functions. They hit their mark EVERY time.

