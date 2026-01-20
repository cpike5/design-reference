# Design Assessment

## User Arguments

```
/design-assessment -- {PROJECT_CONTEXT}

ie:
/design-assessment -- I'm building a photography portfolio for nature photographers
/design-assessment -- We need a dashboard for tracking fitness metrics
```

## Purpose

Assess the available prototype designs in the `prototypes/` folder and recommend which would work best for a user's project. If the user wants, create a customized sample based on their chosen prototype.

## Workflow

### Phase 1: Gather Context

If the user has not provided sufficient context about their project, gather requirements:

1. Ask about the project's purpose and target audience
2. Ask about the desired mood/vibe (professional, playful, minimal, rich, etc.)
3. Ask about key features or content types needed
4. Ask about any specific design preferences or constraints

If context is already provided (via conversation, context files, or command arguments), proceed directly.

### Phase 2: Review Available Prototypes

Read the prototype documentation to understand what's available:

1. Check `CLAUDE.md` for any prototype descriptions or guidance
2. Read `prototypes/README.md` for the catalog of available designs

From the documentation, identify:
- Design styles and visual language of each prototype
- Content types each was designed for
- Mood/vibe categories (editorial, technical, luxury, minimal, etc.)
- Key UI components and patterns available

Only read individual prototype files if they appear potentially relevant to the user's project.

### Phase 3: Assessment & Recommendation

Based on the user's project context and requirements:

1. Evaluate which prototypes best match the project's:
   - Purpose and content type
   - Target audience expectations
   - Desired mood and aesthetic
   - Required UI patterns and features

2. Rank the top 2-3 prototypes with explanations of why each would work well

3. Present the recommendations to the user with:
   - Prototype name and brief description
   - Why it's a good fit for their project
   - Any adaptations that would be needed
   - Visual style characteristics

### Phase 4: Customization Offer

Ask the user if they'd like a customized sample based on one of the recommended prototypes.

If the user declines, provide a summary and end the workflow.

### Phase 5: Create Customized Sample (if user accepts)

1. **Read and Analyze the Selected Prototype**
   - Review the full HTML file
   - Document the design system (colors, typography, spacing, components)
   - Understand the layout structure and patterns
   - Note all CSS variables and styling conventions

2. **Use a Subagent Prototyper to Create the Customized Version**
   - Create a copy of the prototype with a descriptive filename
   - Preserve the exact design system and styling
   - Adapt all content to match the user's project context
   - Maintain the same UI patterns and interactions
   - Update text, labels, navigation items, and sample data to fit the new context

3. **UI Critic Review**
   - Use a subagent UI critic to review the customized prototype
   - Assess design consistency (does it still feel cohesive?)
   - Check content adaptation (does the new content work with the design?)
   - Identify any polish opportunities or issues

4. **Prototyper Refinement**
   - Use a subagent prototyper to address the critic's feedback
   - Apply recommended polish and fixes
   - Ensure the customized prototype is high quality

5. **Final Review (if needed)**
   - If significant changes were made, do one more UI critic pass
   - Continue the critic -> prototyper loop until approved

### Phase 6: Deliver

Provide the user with:
- Location of the new customized prototype file
- Summary of what was adapted from the original
- Any recommendations for further customization

## Notes

- The goal is to help users quickly find and adapt a design that fits their needs
- Preserve the original prototype's design language when customizing
- Focus on content adaptation, not design changes, in the customized sample
- Use subagents appropriately to constrain context and work efficiently
- Always prioritize user's stated preferences and requirements
- The prototypes folder contains various styles: editorial, dashboard, gaming, professional, etc.

## Available Prototypes Reference

The prototypes folder typically includes designs for:
- Dashboard/admin interfaces
- Editorial/content sites
- Portfolio/showcase sites
- E-commerce/inventory systems
- Gaming/entertainment
- Professional/corporate

Each has distinct visual language suitable for different project types.
