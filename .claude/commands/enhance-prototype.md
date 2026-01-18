# Enhance Prototype

## User Arguments

```
/enhance-prototype {FILENAME} -- {ADDITIONAL_CONTEXT}
```

## Purpose

I'll often create prototypes based on minimal prompts with few UX features. I then like to refine and polish that prototype. 

This is a suggested workflow to follow for enhancing prototypes.

## Workflow

- Use a sub-agent to have the UI critic assess the file for general design and consistency. Create an assessment in the docs/assessments folder. 
- Use a sub-agent prototyper to address the feedback
- Use a sub-agent UI critic to assess the updates, as well as specifically assess the design and UX. Suggest polish, animations, textures, small UI/UX features that give the application a refined look
- Use a sub-agent to create a spec to address the critic feedback in the docs/specs folder
- Use a sub-agent prototyper to implement the enhanced features
- (Optional, depending on scope. Skip on small scope enhancements) Have the UI critic do a final pass for approval. Repeat the critic->prototyper loop until deemed approved. 


## Notes

- Use sub-agents to appropriately constrain the work context, but make sure the specs created and the context given to the agents is enough for them to do their work quickly and efficiently.
- Repeat the core loop of UI Critic Review -> Prototype Fix/Enhance until the UI critic deems it acceptable. 
- Always consider user additional context as priority. This is a suggested workflow but the user may suggest something different. Always take their intended process as priority.