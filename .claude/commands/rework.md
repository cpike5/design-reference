# Rework Prototype 

## User Arguments

```
  /rework {FILENAME} -- {CONTENT TYPE}

  ie:
  /rework prototype1.html -- Editorial blog
```

## Purpose

Fix styling, accessibility, and design spec issues with a given prototype, and enhance it with new UI/UX features and visual polish. Produce "production-quality" prototype/demo pages.

## Workflow

Read the given context from the user.

Read the prototype file and understand the existing styling. 

Use a subagent prototyper to rework the prototype, keep the existing layout, styles and themeing, but change the content type from the generic Fragrance Library application to the user's specified content. 

Use a subagent ui critic to reveiw the work.

Send the feedback to the ui critic for final approval. If major issues needed, go back to prototyper rework.

Provide final summary of enhancements and fixes to the prototype. 

