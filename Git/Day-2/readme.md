# Git Commands Guide

## Initializing a Repository
```bash
git init
```
Initializes a new Git repository in your project directory.

## Adding and Committing Files
```bash
git add .
```
Stages all changes for commit.

```bash
git status
```
Displays the status of changes (staged, unstaged, or untracked).

```bash
git commit -m "first commit"
```
Creates a commit with a message describing the changes.

## Viewing Commit History
```bash
git log
```
Displays the commit history. Use `q` to exit the log view.

```bash
git log --oneline
```
Displays a condensed, single-line summary of commit history.

## Viewing Specific Commit Details
```bash
git show <commit-id>
```
Example:
```bash
git show cs337dd
```
Displays details of a specific commit.

## Resetting to a Previous Commit
```bash
git reset --hard <commit-id>
```
Example:
```bash
git reset --hard b41f0c3
```
Resets the repository to a specified commit. **Warning:** This will discard changes made after the specified commit.

## Reverting a Specific Commit
```bash
git revert <commit-id>
```
Example:
```bash
git revert a1e1bc4
```
Reverts the changes made by a specific commit without removing it from the history. This is useful when you want to undo changes from a previous commit while keeping subsequent commits intact.

### Example Scenario
If you have the following commits:
1. Add header
2. Add sidebar
3. Add button
4. Add navbar
5. Add footer

And you realize you want to remove the changes from the third commit (Add button), but retain the changes from the fourth and fifth commits (Add navbar and Add footer), you can use `git revert`:

```bash
git revert <commit-id>
```
After resolving any conflicts and staging the changes:
```bash
git add .
git commit
```
This creates a new commit (e.g., the sixth commit) that negates the changes from the reverted commit.

### Resolving Merge Conflicts
If a merge conflict occurs during revert:
1. Carefully resolve the conflict in the affected files.
2. Continue the revert process:
   ```bash
   git revert --continue
   ```

## Working with Branches
### Creating and Switching Branches
```bash
git checkout -b <branch-name>
```
Example:
```bash
git checkout -b "feature"
```
Creates and switches to a new branch named `feature`.

### Listing Branches
```bash
git branch
```
Displays a list of all branches in the repository.

### Making Changes in a Branch
1. Make changes to the code.
2. Stage and commit the changes:
   ```bash
   git add .
   git commit -m "add button"
   ```
   These changes are saved in the `feature` branch, not in the `master` branch.

### Merging a Branch
1. Switch to the master branch:
   ```bash
   git checkout master
   ```
2. Merge the feature branch:
   ```bash
   git merge feature
   ```
3. Delete the feature branch:
   ```bash
   git branch -D feature
   ```

### Resolving Merge Conflicts
#### Example Scenario
1. Create a bug-fix branch:
   ```bash
   git checkout -b "Bug"
   ```
2. Make changes to the code (e.g., line 20) and commit:
   ```bash
   git add .
   git commit -m "Bug fix"
   ```
3. Switch back to the master branch and make conflicting changes (e.g., line 20).
4. Attempt to merge the bug-fix branch:
   ```bash
   git merge Bug
   ```
   This will create a merge conflict.

#### Resolving the Conflict
1. Open the affected file(s) and manually resolve the conflicts.
2. Stage the resolved file(s):
   ```bash
   git add .
   ```
3. Commit the changes:
   ```bash
   git commit -m "Merge conflict fix"
   ```
4. Delete the bug-fix branch:
   ```bash
   git branch -D Bug
   ```

---
Add this guide to your `README.md` file for future reference.
