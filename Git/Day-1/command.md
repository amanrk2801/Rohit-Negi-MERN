# Step to Learn Git and GitHub

## 1. What is Git?
Git is a version control system (VCS) that helps developers keep track of changes to their code over time. It allows multiple people to collaborate on the same project, track the history of changes, and manage different versions of a project efficiently.

---

## Install Git

### On Mac:
1. **Install Homebrew (if not already installed)**
   - First step:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Second step:
     ```bash
     eval "$($(brew --prefix)/bin/brew shellenv)"
     ```
   - Third step:
     ```bash
     brew install git
     ```
   - Fourth step:
     ```bash
     git --version
     ```

### On Windows:
1. Download Git from the official website: [Git for Windows](https://git-scm.com/downloads)

---

## Configure Git
1. Set your name and email for Git:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
2. Verify the configuration:
   ```bash
   git config --list
   ```

---

## How to See Hidden Folders

### On Mac:
- Press `CMD + SHIFT + .`

### On Windows:
- **Windows 10**: Click on the "View" tab at the top, then check the box for "Hidden items" in the "Show/Hide" section.
- **Windows 11**: Click the "View" dropdown (three dots) in the toolbar, then select `Show > Hidden items`.

---

## Basic Git Commands

### Check the Status of Your Repository
- To view changes that are staged, not staged, or untracked:
  ```bash
  git status
  ```

### View Differences
- To see what has been changed line by line:
  ```bash
  git diff
  ```
  - Press `q` to exit the diff view.

### Add Files to the Staging Area
- To stage all changes:
  ```bash
  git add .
  ```

### Commit Changes
- To commit the staged changes with a message:
  ```bash
  git commit -m "message"
  ```

### Remove Files from the Staging Area
- To unstage a specific file:
  ```bash
  git reset <file>
  ```
- Alternatively:
  ```bash
  git restore --staged <file>
  ```

### View Commit Logs
- To view the commit history:
  ```bash
  git log
  ```
- For a condensed view:
  ```bash
  git log --oneline
  ```
- To view details of a specific commit:
  ```bash
  git show <hash>
  ```

### Revert Changes
- To reset to a specific commit (this discards all changes after the specified commit):
  ```bash
  git reset --hard <hashCode>
  ```
- To undo a specific commit while preserving history:
  ```bash
  git revert <hashCode>
  ```

