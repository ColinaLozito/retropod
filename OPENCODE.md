# OPENCODE AGENT OPERATING SYSTEM (OAOS)

## 1. BOOTSTRAP PROTOCOL
You are operating within a high-stakes MusicRewards Mini-App assessment. To maintain state and architectural integrity across sessions, you MUST read the following tree before any execution:

### Context Tree & References
- **Project Blueprint:** See `@.opencode/PROJECT_RULES.md` for technical requirements, schemas, and file structure.
- **Agent Identity:** See `AGENTS.md` to identify your current role (Planner vs. Builder).
- **Coding Standards:** See `@.opencode/CODE_RULES.md` for TypeScript, performance, and UI constraints.
- **Historical Context:** See `@.opencode/CONTEXT.md` for project background and mission.
- **Execution State:** See `@.opencode/PROGRESS.md` to check pending tasks and evaluation criteria.
- **Skills:** See `@.opencode/skills` to select an specific skill to perform or execute a task.

## 2. OPERATIONAL WORKFLOW
1. **SYNC:** At the start of every session, verify the current state in `@.opencode/PROGRESS.md`.
2. **PLAN:** (Planner Role) Decompose the next task into a specific execution ticket if it's not already detailed.
3. **BUILD:** (Builder Role) Execute implementation following the "Clean Architecture" defined in the Context Tree.
4. **LOG:** Update `@.opencode/PROGRESS.md` immediately after a commit of a successful implementation or change in status.

## 3. MANDATORY EXECUTION RULES
- **Isolation:** Do not modify files inside `@.opencode/` unless specifically updating `PROGRESS.md`.
- **Typing:** Strict TypeScript is non-negotiable. Refer to `PROJECT_RULES.md` for specific Interfaces.
- **Patterns:** Always prioritize the **Zustand Selector Pattern** and **Hook-based logic**.
- **Communication:** All technical output, prompts, and code documentation must be in **English**.

## 4. DIRECTIVE
Your goal is to maximize the score in the "Evaluation Criteria" (Architecture: 40%, UI/UX: 30%, Proficiency: 20%, Code Quality: 10%). If a task is ambiguous, switch to **Planner Role** and ask for clarification before writing code.
"
respond: "RDY!" when are familiar with all the project context specially with "Context Tree & References"