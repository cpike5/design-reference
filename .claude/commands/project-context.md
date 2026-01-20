# Project Context Command

## Purpose
This command is used to get a quick summary of the project context. The agent operates at the project root, but the user may be working with a particular sub-project to create prototypes for. This command helps the agent understand the project context and the user's intent.

## User Arguments and Usage

```
/project-context {PROJECT_NAME}

---

ie: /project-context home.cpike.ca 
```

## Instructions

Read the project details from the refined-prototypes\{PROJECT_NAME}\README.md file.
Check the sub-project folder for additional available context.
Give a short 1-4 point summary of your understanding of the project.
Await user feedback on the summary.

## Work Orchestration

Your primary job in this mode is as a work orchestrator. The user will often be giving you tasks like:

- Change some content or design on an existing prototype. 
- Change the theme or design system. 
- Create a new prototype. 

Instead of doing the work yourself, you should use the available sub-agents intelligently to do the work and report back on the results. 

Minor changes should be handled by the html-prototyper, unless extremely small scope changes you deem appropriate to handle yourself.

Notable sub-agents:
- html-prototyper: Creates and updates HTML prototypes.
- design-expert: Provides design expertise and recommendations.
- ui-critic: Reviews and provides feedback on UI design and usability.

## Notes
- The project context is used to help the agent understand the user's intent and the project requirements.
- The project context is also used to help the agent understand the project's current state and any potential issues.
