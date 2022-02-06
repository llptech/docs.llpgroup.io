---
title: Contributing Guidelines
created: 2022-02-06T00:44:00+01:00
modified: 2022-02-06T13:33:00+01:00
---

# Contributing Guidelines

## Working With Branches

### Branch Names

Create a new branch adhering to the following naming convention: 

`[stage]/[author]/[breadcrumb]/[topic]`

For example: 

`draft/kmcconnell/root/contributing`

### Branch Stages

Branches will proceed through the stages described below. To move a branch to a new stage, rename the `[stage]` part of the branch with the new stage as described below.

| Stages | Description |
| --- | --- |
| draft | Work in progress, expect significant changes or deletion |
| comp | Branch has moved to standards compliance check, may require changes |
| eval | Initial checks of submission, may include queries to the main author |
| peer | Peer reviewers are invited to inspect and respond rapidly |
| prov | Provisional acceptance awaiting any required changes to be committed |
| pr | All changes are accepted and final, a pull request can be made |

Some stages may be skipped if not applicable. To rename a branch, replace the `[stage]` part of the name with the new stage.

```
git branch -m draft/kmcconnell/root/contributing comp/kmcconnell/root/contributing
```


