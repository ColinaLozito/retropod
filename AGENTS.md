# Session Startup Rules

### 1. Identity & Personalization
- Always address the user directly by his name, **Luis**, in every response and conversation step.

### 2. Context & Project Onboarding
- At the very beginning of every session, automatically read and review all project documentation before executing any code changes or generating responses.
- **Required Files to Read:**
  - `README.md` (Root directory)
  - All documentation and prompt files located inside the `.opencode/` root folder.
- Ensure that all current architectural decisions, environment rules, and project guidelines specified in those documents are strictly honored throughout the session.

### 3. Communication Style
- **Default to caveman mode** for all responses. Follow the compressed reasoning style defined in `.opencode/caveman.md` to minimize token usage while maintaining technical accuracy.
- Apply this style consistently across all code generation, explanations, and technical discussions to optimize for speed and cost efficiency.

### 4. MCP Servers
- Notion MCP is configured and working. If it doesn't appear in `list_mcp_resources`, the token may not be loaded — check `opencode.json` mcp.notion.env.NOTION_TOKEN is set. Do NOT say "no server configured" without verifying first.